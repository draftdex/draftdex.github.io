import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalConstants } from '../global/global-constants';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-filter-menu',
    templateUrl: './filter-menu.component.html',
    styleUrls: ['./filter-menu.component.css', './../../styles.css'],
})
export class FilterMenuComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    // Grab global type, ability, and tier lists from GlobalConstants
    typeList = GlobalConstants.typeList;
    abilityList = GlobalConstants.abilityList;
    moveList = GlobalConstants.moveList;
    tierList = GlobalConstants.tierList;

    // Boolean to dynamically render ability/move dropdown menus
    abilityActive = false;
    moveActive = false;

    @Input() queryProcessing: boolean = false; // boolean to determine if a query is being processed (if so, display spinner)
    // Keep track of filter values
    @Output() onFilterUpdate = new EventEmitter<any>();
    // Switch to shortlist view
    @Output() onDisplayShortList = new EventEmitter<any>();
    @Output() onFilterMenuCollapseChange = new EventEmitter<boolean>();

    // Boolean to track if filter menu is open
    menuOpen = true;

    type1 = 'Select';
    type2 = 'Select';
    ability = '';
    move = '';
    tier = 'Select';
    dualType = false;
    available = false;

    // Show ability dropdown menu
    setAbilityActive() {
        this.abilityActive = true;
    }

    // Hide ability dropdown menu
    setAbilityInactive() {
        this.abilityActive = false;
    }

    // Show move dropdown menu
    setMoveActive() {
        this.moveActive = true;
    }

    // Hide move dropdown menu
    setMoveInactive() {
        this.moveActive = false;
    }

    // Register dropdown menu selection
    selectAbility(ability: string) {
        this.ability = ability;
        this.abilityActive = false;
    }

    // Register move dropdown menu selection
    selectMove(move: string) {
        this.move = move;
        this.moveActive = false;
    }

    // Register DOM click event to dynamically hide ability dropdown when necessary
    @HostListener('document:click', ['$event']) onClick(event: PointerEvent) {
        if (
            (<HTMLSelectElement>event.target).id !== 'ability_choice' &&
            (<HTMLSelectElement>event.target).id !== 'ability_input' &&
            this.abilityActive
        ) {
            this.setAbilityInactive();
        } else if (
            (<HTMLSelectElement>event.target).id !== 'move_choice' &&
            (<HTMLSelectElement>event.target).id !== 'move_input' &&
            this.moveActive
        ) {
            this.setMoveInactive();
        }
    }

    // Register DOM keypress event to dynamically hide ability dropdown when [esc] is pressed
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.key === 'Escape' && this.abilityActive) {
            this.setAbilityInactive();
        }
    }

    // Register DOM keypress event to dynamically hide move dropdown when [esc] is pressed
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEventMove(event: KeyboardEvent) {
        if (event.key === 'Escape' && this.moveActive) {
            this.setMoveInactive();
        }
    }

    // Dynamically display abilities according to input text
    searchAbilities($event: KeyboardEvent) {
        // Grab abilities from ability dropdown
        const abilities = document.getElementsByClassName('select-active'); // innerText only gives human-readable content of <a> tag

        // Determine if a match is found
        let found = false;

        // Display all potential abilities if no input
        if (!this.abilityActive && $event.key !== 'Escape') {
            this.setAbilityActive();
            for (let i = 0; i < abilities.length; i++) {
                (<HTMLElement>abilities[i]).style.display = '';
            }
        }

        // Iterate over abilities and compare to input text
        // Only display options matching input
        for (let i = 0; i < abilities.length; i++) {
            let possible_ability = <HTMLElement>abilities[i];
            if (
                possible_ability.innerText
                    .toUpperCase()
                    .indexOf(this.ability.toUpperCase()) > -1
            ) {
                possible_ability.style.display = '';
                found = true;
            } else {
                possible_ability.style.display = 'none';
            }
        }

        // Hide dropdown menu if input doesn't match any abilities
        if (!found) {
            this.setAbilityInactive();
        }
    }

    searchMoves($event: KeyboardEvent) {
        console.log('TODO: Implement searching moves');
    }

    // Send filter values to main app page
    sendFilterVals() {
        this.onFilterUpdate.emit({
            type1: this.type1 == 'Select' ? false : this.type1,
            type2: this.type2 == 'Select' ? false : this.type2,
            ability: this.ability,
            tier: this.tier == 'Select' ? false : this.tier,
            available: this.available == false ? 0 : 1,
            dualTypeExclusive: this.dualType == false ? 0 : 1,
        });
    }

    // Fire event to display shortList
    displayShortList() {
        this.onDisplayShortList.emit();
    }

    // Fire event to collapse filter menu
    collapseMenu() {
        this.menuOpen = !this.menuOpen;
        this.onFilterMenuCollapseChange.emit(this.menuOpen);
    }
}
