import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
        <div>
            <h1>Test works!</h1>
            <h2>ok</h2>
        </div>
    `,
    styles: [
        `
            h1 {
                color: red;
            }
        `,
    ],
})
export class TestComponent {
    testProp = 'wbs';
}
