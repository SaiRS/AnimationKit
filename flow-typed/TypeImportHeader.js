// actor section
import XXActor from 'XXActionAlias/Actor/XXActor.js';
import XXNodeActor from 'XXActionAlias/Actor/XXNodeActor.js';
import XXNodeDomActor from 'XXActionAlias/Actor/XXNodeDomActor.js';

// action section
import XXAction from 'XXActionAlias/Action/XXAction.js';
import XXActionInstant from 'XXActionAlias/Action/XXActionInstant.js';
import XXActionInterval from 'XXActionAlias/Action/XXActionInterval.js';
import XXActionSequence from 'XXActionAlias/Action/XXActionSequence.js';
import XXActionSqawn from 'XXActionAlias/Action/XXActionSqawn.js';
import XXActionSpeed from 'XXActionAlias/Action/XXActionSpeed.js';

// base action section
import XXActionMoveTo from 'XXActionAlias/Action/BaseAction/XXActionMoveTo.js';
import XXActionRotateTo from    'XXActionAlias/Action/BaseAction/XXActionRotateTo.js';
import XXActionScaleTo from   'XXActionAlias/Action/BaseAction/XXActionScaleTo.js';

// Type
import XXMatrix from "XXFoundation/Type/XXMatrix.js"
import XXPosition from "XXFoundation/Type/XXPosition.js"
import XXRotation from "XXFoundation/Type/XXRotation.js"
import XXScale from "XXFoundation/Type/XXScale.js"
import XXVector from "XXFoundation/Type/XXVector.js"
import XXObject from "XXFoundation/XXObject.js"


// driver
import XXActionDriver from 'XXActionAlias/ActionDriver/XXActionDriver.js'
import XXDriveTargetInterface from 'XXActionAlias/ActionDriver/XXDriveTarget.js'


/**
 * example
 * https://flow.org/en/docs/libdefs/creation/
 *
 * declare A Global function
 * declare function foo(a: number): string;
 *
 * declare A Global Class
 declare class URL {
  constructor(urlStr: string): URL;
  toString(): string;

  static compare(url1: URL, url2: URL): boolean;
};
 *
 *
 * Declaring A Global Variable
 * declare var PI: number;
 *
 * Declaring A Global Type
 * declare type UserID = number;
 *
 *
 * Declaring A Module...
 */
