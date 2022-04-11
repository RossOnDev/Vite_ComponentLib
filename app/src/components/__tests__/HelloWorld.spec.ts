import { describe, test } from 'vitest';


import { mount } from '@vue/test-utils';
import App from "@/App.vue";

describe("App testing", () =>
{
    test("test me App", async () =>
    {
        const renderResult = mount(App)

        console.log(renderResult.html())

        const button = renderResult.find(".buttonToEnable");
        await button.trigger("click");

        console.log(renderResult.html());
    })
})
