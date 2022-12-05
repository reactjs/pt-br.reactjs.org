/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {Children, useRef, useEffect, useState} from 'react';
import * as React from 'react';
import cn from 'classnames';
import {H2} from 'components/MDX/Heading';
import {H4} from 'components/MDX/Heading';
<<<<<<< HEAD
=======
import {Challenge} from './Challenge';
>>>>>>> cb9854a54984ef1288a8a2b8754897b15e75f433
import {Navigation} from './Navigation';

interface ChallengesProps {
  children: React.ReactElement[];
  isRecipes?: boolean;
  titleText?: string;
  titleId?: string;
}

export interface ChallengeContents {
  id: string;
  name: string;
  order: number;
  content: React.ReactNode;
  solution: React.ReactNode;
  hint?: React.ReactNode;
}

const parseChallengeContents = (
  children: React.ReactElement[]
): ChallengeContents[] => {
  const contents: ChallengeContents[] = [];

  if (!children) {
    return contents;
  }

  let challenge: Partial<ChallengeContents> = {};
  let content: React.ReactElement[] = [];
  Children.forEach(children, (child) => {
    const {props, type} = child;
    switch ((type as any).mdxName) {
      case 'Solution': {
        challenge.solution = child;
        challenge.content = content;
        contents.push(challenge as ChallengeContents);
        challenge = {};
        content = [];
        break;
      }
      case 'Hint': {
        challenge.hint = child;
        break;
      }
      case 'h4': {
        challenge.order = contents.length + 1;
        challenge.name = props.children;
        challenge.id = props.id;
        break;
      }
      default: {
        content.push(child);
      }
    }
  });

  return contents;
};

export function Challenges({
  children,
  isRecipes,
  titleText = isRecipes ? 'Try out some examples' : 'Try out some challenges',
  titleId = isRecipes ? 'examples' : 'challenges',
}: ChallengesProps) {
  const challenges = parseChallengeContents(children);
  const totalChallenges = challenges.length;
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const queuedScrollRef = useRef<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentChallenge = challenges[activeIndex];

  useEffect(() => {
    if (queuedScrollRef.current === true) {
      queuedScrollRef.current = false;
      scrollAnchorRef.current!.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
<<<<<<< HEAD
    setShowHint((hint) => !hint);
  };

  const toggleSolution = () => {
    if (showHint && !showSolution) {
      setShowHint(false);
    }
    setShowSolution((solution) => !solution);
  };

  const currentChallenge = challenges.find(({id}) => id === activeChallenge);
  if (currentChallenge === undefined) {
    throw new TypeError('currentChallenge should always exist');
  }
  const nextChallenge = challenges.find(({order}) => {
    return order === currentChallenge.order + 1;
  });

=======
  });

  const handleChallengeChange = (index: number) => {
    setActiveIndex(index);
  };

>>>>>>> cb9854a54984ef1288a8a2b8754897b15e75f433
  const Heading = isRecipes ? H4 : H2;
  return (
    <div className="max-w-7xl mx-auto py-4">
      <div
        className={cn(
          'border-gray-10 bg-card dark:bg-card-dark shadow-inner rounded-none -mx-5 sm:mx-auto sm:rounded-lg'
        )}>
        <div ref={scrollAnchorRef} className="py-2 px-5 sm:px-8 pb-0 md:pb-0">
          <Heading
            id={titleId}
            className={cn(
              'mb-2 leading-10 relative',
              isRecipes
                ? 'text-xl text-purple-50 dark:text-purple-30'
                : 'text-3xl text-link'
            )}>
            {titleText}
          </Heading>
<<<<<<< HEAD
          {challenges.length > 1 && (
=======
          {totalChallenges > 1 && (
>>>>>>> cb9854a54984ef1288a8a2b8754897b15e75f433
            <Navigation
              currentChallenge={currentChallenge}
              challenges={challenges}
              handleChange={handleChallengeChange}
              isRecipes={isRecipes}
            />
          )}
        </div>
<<<<<<< HEAD
        <div className="p-5 sm:py-8 sm:px-8">
          <div key={activeChallenge}>
            <h3 className="text-xl text-primary dark:text-primary-dark mb-2">
              <div className="font-bold block md:inline">
                {isRecipes ? 'Example' : 'Challenge'} {currentChallenge.order}{' '}
                of {challenges.length}
                <span className="text-primary dark:text-primary-dark">: </span>
              </div>
              {currentChallenge.name}
            </h3>
            <>{currentChallenge.content}</>
          </div>
          <div className="flex justify-between items-center mt-4">
            {currentChallenge.hint ? (
              <div>
                <Button className="mr-2" onClick={toggleHint} active={showHint}>
                  <IconHint className="mr-1.5" />{' '}
                  {showHint ? 'Hide hint' : 'Show hint'}
                </Button>
                <Button
                  className="mr-2"
                  onClick={toggleSolution}
                  active={showSolution}>
                  <IconSolution className="mr-1.5" />{' '}
                  {showSolution ? 'Hide solution' : 'Show solution'}
                </Button>
              </div>
            ) : (
              !isRecipes && (
                <Button
                  className="mr-2"
                  onClick={toggleSolution}
                  active={showSolution}>
                  <IconSolution className="mr-1.5" />{' '}
                  {showSolution ? 'Hide solution' : 'Show solution'}
                </Button>
              )
            )}

            {nextChallenge && (
              <Button
                className={cn(
                  isRecipes
                    ? 'bg-purple-50 border-purple-50 hover:bg-purple-50 focus:bg-purple-50 active:bg-purple-50'
                    : 'bg-link dark:bg-link-dark'
                )}
                onClick={() => {
                  setActiveChallenge(nextChallenge.id);
                  setShowSolution(false);
                }}
                active>
                Next {isRecipes ? 'Example' : 'Challenge'}
                <IconArrowSmall
                  displayDirection="right"
                  className="block ml-1.5"
                />
              </Button>
            )}
          </div>
          {showHint && currentChallenge.hint}

          {showSolution && (
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-dark">
                Solution
              </h3>
              {currentChallenge.solution}
              <div className="flex justify-between items-center mt-4">
                <Button onClick={() => setShowSolution(false)}>
                  Close solution
                </Button>
                {nextChallenge && (
                  <Button
                    className={cn(
                      isRecipes ? 'bg-purple-50' : 'bg-link dark:bg-link-dark'
                    )}
                    onClick={() => {
                      setActiveChallenge(nextChallenge.id);
                      setShowSolution(false);
                      if (scrollAnchorRef.current) {
                        scrollAnchorRef.current.scrollIntoView({
                          block: 'start',
                          behavior: 'smooth',
                        });
                      }
                    }}
                    active>
                    Next Challenge
                    <IconArrowSmall
                      displayDirection="right"
                      className="block ml-1.5"
                    />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
=======
        <Challenge
          key={currentChallenge.id}
          isRecipes={isRecipes}
          currentChallenge={currentChallenge}
          totalChallenges={totalChallenges}
          hasNextChallenge={activeIndex < totalChallenges - 1}
          handleClickNextChallenge={() => {
            setActiveIndex((i) => i + 1);
            queuedScrollRef.current = true;
          }}
        />
>>>>>>> cb9854a54984ef1288a8a2b8754897b15e75f433
      </div>
    </div>
  );
}
