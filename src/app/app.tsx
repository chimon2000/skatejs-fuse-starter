import { Component, h, prop } from 'skatejs';

type Props = {
    greeting: string,
};
export default class App extends Component<Props> {
    static get is() { return 'my-app'; }
    static get props() {
        return {
            greeting: prop.string()
        };
    }

    greeting: string = 'World';

    renderCallback({ greeting }: Props) {
        return [
            <div>Hello {greeting}!</div>,
            <p>
                <blockquote>Don't hate! Just Skate!!!</blockquote>
            </p>,
        ];
    }
}
