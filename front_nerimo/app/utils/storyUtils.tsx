/* eslint-disable no-unused-vars */
import { Story } from 'inkjs';

import { normalizeKey } from './normalizeKey';

export const handleBackgroundTags = (tags: string[] | null): string | null => {
  if (!tags) return null;
  const backgroundTagMatch = tags.find(tag => tag.startsWith('BACKGROUND:'));
  return backgroundTagMatch ? backgroundTagMatch.split(':')[1].trim() : null;
};

export const createAndConfigureStory = (
  histoire: any,
  sessionPrenom: string,
  sauvegarde?: string,
): Story => {
  const inkStory = new Story(histoire);
  inkStory.variablesState['sessionPrenom'] = sessionPrenom;

  if (sauvegarde) {
    inkStory.state.LoadJson(sauvegarde);
  }

  return inkStory;
};

export const continueStory = (
  inkStory: Story,
  personnageNom: string,
  backgroundImages: any,
  setCurrentText: (text: string) => void,
  setChoices: (choices: any[]) => void,
  setBackgroundImage: (image: string | null) => void,
  savedText?: string,
  delay: number = 100,
): boolean => {
  let text = savedText ?? '';
  let newBackgroundImage: string | null = null;

  while (inkStory.canContinue) {
    const currentText = inkStory.Continue() ?? '';

    if (currentText.trim().length > 0) {
      text += currentText.trim();
    }

    const tags = inkStory.currentTags;
    const backgroundTag = handleBackgroundTags(tags);
    if (backgroundTag) {
      newBackgroundImage = backgroundTag;
      console.log(`Background tag detected with value: ${newBackgroundImage}`);
    }
  }

  if (newBackgroundImage) {
    const normalizedPersonnageNom = normalizeKey(personnageNom);
    const images = backgroundImages[normalizedPersonnageNom];
    setBackgroundImage(images[normalizeKey(newBackgroundImage)] || null);
  }

  setTimeout(() => {
    setCurrentText(text.trim());
    const choices = inkStory.currentChoices;
    setChoices(choices);
  }, delay);

  return inkStory.currentChoices.length === 0;
};

export const makeChoice = (
  story: Story | null,
  choiceIndex: number,
  continueStoryFn: (inkStory: Story) => boolean,
  setModalVisible: (visible: boolean) => void,
  setStoryEnded: (ended: boolean) => void,
) => {
  if (story) {
    story.ChooseChoiceIndex(choiceIndex);
    const isStoryEnded = continueStoryFn(story);
    setStoryEnded(isStoryEnded);
    setModalVisible(false);
  }
};
