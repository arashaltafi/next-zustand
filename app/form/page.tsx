'use client';

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useStore } from "@/libs/useStore";
import { useShallow } from "zustand/react/shallow";

export default function FormPage() {
    const { form, setForm, resetForm } = useStore(
        useShallow(state => ({
            form: state.form,
            setForm: state.setForm,
            resetForm: state.resetForm,
        }))
    );

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">User Form</h1>

            {
                (form.name || form.age || form.email) && (
                    <div className="mb-6 p-4 bg-green-500 border-2 border-red-500 rounded-lg">
                        <h2 className="font-semibold text-lg mb-2">Saved data:</h2>
                        <p><strong>Name:</strong> {form.name}</p>
                        <p><strong>Age:</strong> {form.age}</p>
                        <p><strong>Email:</strong> {form.email}</p>
                    </div>
                )
            }

            <form
                onSubmit={(e: any) => {
                    e.preventDefault()
                    setForm({
                        name: e.target.name.value,
                        age: e.target.age.value,
                        email: e.target.email.value,
                    })
                }}
            >
                <Input
                    id="name"
                    label="Name"
                    type={"text"}
                />
                <Input
                    id="age"
                    label="Age"
                    type={"number"}
                />
                <Input
                    id="email"
                    label="Email"
                    type={"email"}
                />

                <div
                    className="mt-4 space-x-2"
                >
                    <Button
                        color="blue"
                        onClick={() => console.log('Submitted:', form)}
                    >
                        Submit
                    </Button>
                    <Button
                        color="red"
                        onClick={resetForm}
                    >
                        Reset Form
                    </Button>
                </div>
            </form>
        </div>
    );
}