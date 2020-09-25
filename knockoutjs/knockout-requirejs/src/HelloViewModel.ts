import * as ko from 'knockout';

class HelloViewModel {
	name = ko.observable<string>("World");
	capName = ko.computed(this.capNameImpl, this);
	numbers = ko.observableArray<number>([3, 2, 1]);
	serverTime = ko.observable<Date>();

	capNameImpl() {
		return this.name().toUpperCase();
	}

	greeting() {
		return "Hello " + this.name();
	}

	onClick(vm: HelloViewModel, event: CustomEvent) {
		vm.serverTime(new Date());
	}
}

export = HelloViewModel;
