  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Program Structure, ABENABAP_PROGRAM_LAYOUT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

Program Structure

![Figure](abdoc_program.gif)

-   Each ABAP program starts with a [program-initiating statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_statement.htm) that depends on the [program type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_type_oview.htm).
-   The functions of an ABAP program are implemented in processing blocks. Processing blocks are defined using [modularization statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm). [Declarative statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) in processing blocks of the type [procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_procedures.htm) can be used to create local data types and data objects. All other processing blocks do not have a local [data area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_area_glosry.htm "Glossary Entry") and any declarative statements apply to the program globally. The most important processing blocks in ABAP Objects are methods. They can only be implemented in the implementation part of their class. The order of the processing blocks or implementation parts is irrelevant for program execution, but should support the readability of a program.
-   Each ABAP program provides [built-in data types, data objects, and built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in.htm).
-   Following the program-initiating statement, every program contains a global declaration part, in which [definitions and declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) are implemented that are valid and visible throughout the entire program. This includes the declaration of data types and data objects, as well as the definition of interfaces or the declaration section of classes in ABAP Objects. The definitions of interfaces and classes contain the declarations of their components. While the order of the individual definitions and declarations is not fixed, it should respect the fact that an ABAP statement can only refer to existing definitions and declarations. For example, a reference variable can only refer to a previously defined class, which in turn can only implement a previously defined interface. Once a [procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") is initiated, data types and data objects that are visible within that procedure can be declared. In the broadest sense, the declaration of data types also includes the [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping.htm) of objects that have an undetermined data type when the program is created.
-   All other statements of an ABAP program are implementation statements, which are part of a [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). The implementation statements are used to implement the functions of a processing block. The functionality of all processing blocks is largely implemented using the same statements.
-   Since ABAP is a language that has grown over time, it contains several [obsolete additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) of statements that have been replaced by better language constructs, but which cannot be removed for reasons of downward compatibility. In ABAP Objects, that is, when implementing methods, almost all of the obsolete language elements usually fail syntax checks. Although these language elements should no longer be used in new programs, they can still be found in older programs.

Continue
[ABAP Program Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_type_oview.htm)
[Program-Initiating Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_statement.htm)
[Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm)