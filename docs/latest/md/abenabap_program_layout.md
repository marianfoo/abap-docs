  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Program%20Structure%2C%20ABENABAP_PROGRAM_LAYOUT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Program Structure

![Figure](abdoc_program.gif)

-   Each ABAP program starts with a [program-initiating statement](javascript:call_link\('abenabap_program_statement.htm'\)) that depends on the [program type](javascript:call_link\('abenprogram_type_oview.htm'\)).
-   The functions of an ABAP program are implemented in processing blocks. Processing blocks are defined using [modularization statements](javascript:call_link\('abenabap_language_modularization.htm'\)). [Declarative statements](javascript:call_link\('abenabap_declarations.htm'\)) in processing blocks of the type [procedure](javascript:call_link\('abenabap_language_procedures.htm'\)) can be used to create local data types and data objects. All other processing blocks do not have a local [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") and any declarative statements apply to the program globally. The most important processing blocks in ABAP Objects are methods. They can only be implemented in the implementation part of their class. The order of the processing blocks or implementation parts is irrelevant for program execution, but should support the readability of a program.
-   Each ABAP program provides [built-in data types, data objects, and built-in functions](javascript:call_link\('abenbuilt_in.htm'\)).
-   Following the program-initiating statement, every program contains a global declaration part, in which [definitions and declarations](javascript:call_link\('abenabap_declarations.htm'\)) are implemented that are valid and visible throughout the entire program. This includes the declaration of data types and data objects, as well as the definition of interfaces or the declaration section of classes in ABAP Objects. The definitions of interfaces and classes contain the declarations of their components. While the order of the individual definitions and declarations is not fixed, it should respect the fact that an ABAP statement can only refer to existing definitions and declarations. For example, a reference variable can only refer to a previously defined class, which in turn can only implement a previously defined interface. Once a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is initiated, data types and data objects that are visible within that procedure can be declared. In the broadest sense, the declaration of data types also includes the [typing](javascript:call_link\('abentyping.htm'\)) of objects that have an undetermined data type when the program is created.
-   All other statements of an ABAP program are implementation statements, which are part of a [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"). The implementation statements are used to implement the functions of a processing block. The functionality of all processing blocks is largely implemented using the same statements.
-   Since ABAP is a language that has grown over time, it contains several [obsolete additions](javascript:call_link\('abenabap_obsolete.htm'\)) of statements that have been replaced by better language constructs, but which cannot be removed for reasons of downward compatibility. In ABAP Objects, that is, when implementing methods, almost all of the obsolete language elements usually fail syntax checks. Although these language elements should no longer be used in new programs, they can still be found in older programs.

Continue
[ABAP Program Types](javascript:call_link\('abenprogram_type_oview.htm'\))
[Program-Initiating Statements](javascript:call_link\('abenabap_program_statement.htm'\))
[Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\))