  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) →  [Macros](javascript:call_link\('abenabap_macros.htm'\)) → 

DEFINE

[Quick Reference](javascript:call_link\('abapdefine_shortref.htm'\))

Syntax

DEFINE macro.
  ... &1 ... &9 ...
END-OF-DEFINITION.

Effect

The statement DEFINE defines a [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") macro. The following [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) macro apply and [ABAP words](javascript:call_link\('abenabap_words.htm'\)) cannot be used. Macros can be defined in all [program types](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry"), particularly in [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry").

Any content can be defined between the statements DEFINE and END-OF-DEFINITION. A macro is not evaluated until it is included in another program (which must have correct syntax). Currently, a macro can only be [included](javascript:call_link\('abenmacro_include.htm'\)) in other ABAP programs using its name macro.

The validity of a macro is determined by its position in the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"). It can be inserted at any point after END-OF-DEFINITION in the same compilation unit. If another macro is defined with the same name, it overwrites the previous macro from its new position.

Within a macro, up to nine placeholders &1 ... &9 can be used instead of ABAP words and operands. These placeholders must be replaced by fixed words when the macro is inserted.

Programming Guideline

[Only use macros in exceptional cases.](javascript:call_link\('abenmacros_guidl.htm'\) "Guideline")

Notes

-   Breakpoints cannot be inserted into macros and the statements of a macro cannot be performed as individual steps in ABAP Debugger.
    
-   In global classes, macros are defined in a dedicated include program.
    
-   Apart from in the source code of a program and in [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry"), macros can also be stored as cross-program macros in the table TRMAC. No new macros, however, should be defined in the table TRMAC. An example of a macro stored in the table TRMAC is break, which sets a breakpoint depending on the current user name in the system field sy-uname.
    

Example

See [Including Macros](javascript:call_link\('abenmacro_include.htm'\)).

Executable Example

[Macros](javascript:call_link\('abenmacro_abexa.htm'\))

Continue
[END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\))