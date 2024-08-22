
import { Story } from 'inkjs'; 
import { normalizeKey } from '../utils/normalizeKey';
import { getSession } from './sessionFetch';
import { createAndConfigureStory, handleBackgroundTags } from '../utils/storyUtils';

export const fetchAndLoadStory = async (
  histoire: any,
  sessionPrenom: string,
  sessionId: string | null,
  personnageNom: string,
  backgroundImages: any,
  setStory: (story: Story) => void,
  setCurrentText: (text: string) => void,
  setBackgroundImage: (image: string | null) => void,
  continueStory: (story: Story, savedText?: string) => void
) => {
  try {
    if (sessionId) {
      const sessionData = await getSession(sessionId);
      const sauvegarde = sessionData?.choixSauvegarde;
      const savedText = sessionData?.texteSauvegarde || "";

      const inkStory = createAndConfigureStory(histoire, sessionPrenom, sauvegarde);
      setStory(inkStory);

      if (sauvegarde) {
        const tags = inkStory.currentTags;
        const newBackgroundImage = handleBackgroundTags(tags);

        if (savedText) {
          setCurrentText(savedText);
        }

        continueStory(inkStory, savedText);

        if (newBackgroundImage) {
          const normalizedPersonnageNom = normalizeKey(personnageNom);
          const images = backgroundImages[normalizedPersonnageNom];
          setBackgroundImage(images[normalizeKey(newBackgroundImage)] || null);
        }

      } else {
        continueStory(inkStory);
      }
    } else {
      const inkStory = createAndConfigureStory(histoire, sessionPrenom);
      setStory(inkStory);
      continueStory(inkStory);
    }
  } catch (error) {
    console.error("Erreur lors du chargement de la sauvegarde de l'histoire:", error);
  }
};
