# ABAP - Keyword Documentation / ABAP - Programming Language / Program Structure / Modularization Statements / Source Code Modules

Included pages: 11


### abenabap_language_includes.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Source%20Code%20Modules%2C%20ABENABAP_LANGUAGE_INCLUDES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Source Code Modules

Source code modularization is the decomposition of the source code of a program into individual units. It is independent of the decomposition of an ABAP program into processing blocks.

Source code modules are implemented either as [include programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_include.htm) or as [macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_macros.htm). Include programs are used to structure large programs, whereas macros can be used to reuse individual parts of programs.

Continue
[Include Programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_include.htm)
[Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_macros.htm)


### abenabap_language_include.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Include%20Programs%2C%20ABENABAP_LANGUAGE_INCLUDE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Include Programs

Include programs are used to split [ABAP source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_source_code_glosry.htm "Glossary Entry") into individual [repository objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_object_glosry.htm "Glossary Entry"). An ABAP program can be created in the [program properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_property_glosry.htm "Glossary Entry") using the [program type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_type_glosry.htm "Glossary Entry") include program. Include programs do not need to contain program-initiating statements and cannot be generated independently of the ABAP compiler. Instead, include programs can be included in [compilation units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry") using the statement [INCLUDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_prog.htm).

An include program must contain complete statements. It can include other include programs but not it cannot include itself. An include program does not need to contain complete processing blocks.

Programming Guideline

[Do not use include programs multiple times](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmultiple_use_include_guidl.htm "Guideline")

Hints

-   For the [global declaration part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of an ABAP program, a special [top include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentop_include_glosry.htm "Glossary Entry") is available which is included in the compilation of individual include programs of a program.
-   [Master programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmaster_program_glosry.htm "Glossary Entry") such as [class pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_pool_glosry.htm "Glossary Entry") or [function pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_pool_glosry.htm "Glossary Entry") are automatically organized into include programs by the ABAP Workbench.

Continue
[INCLUDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_prog.htm)


### abapinclude_prog.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) →  [Include Programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_include.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INCLUDE%2C%20ABAPINCLUDE_PROG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INCLUDE

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_shortref.htm)

Syntax

INCLUDE incl *\[*IF FOUND*\]*.

Addition:

[... IF FOUND](#!ABAP_ONE_ADD@1@)

Effect

The statement INCLUDE includes the [include program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninclude_program_glosry.htm "Glossary Entry") incl at this position in the source code. In syntax checks and the generation of the program by the ABAP Compiler, the statement is replaced by the source code of the include program. The included INCLUDE program must consist of full statements.

If the specified include program does not exist, the program is syntactically incorrect and cannot be executed. This error situation can be suppressed by specifying the addition IF FOUND.

Programming Guidelines

-   [Modularize source code with include programs.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_modular_guidl.htm "Guideline")
-   [Do not use include programs multiple times](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmultiple_use_include_guidl.htm "Guideline")

Hints

-   The statement INCLUDE is the only statement that can be used at the first position of a program instead of a [statement that introduces a program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_init_statement_glosry.htm "Glossary Entry"). The requirement for this is that, after the include program is resolved, a statement that introduces a program is positioned at the start of the including program.
-   [ABAP Workbench](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_workbench_glosry.htm "Glossary Entry") supports the automatic creation of include programs for specific program parts, such as the [top include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentop_include_glosry.htm "Glossary Entry") for global declarative statements. It is recommended that the naming conventions proposed by the ABAP Workbench are always used. The top include can contain only declarative statements and is respected when individual include programs of a program are compiled.
-   In the [Repository Browser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_browser_glosry.htm "Glossary Entry") of the Object Navigator of the ABAP Workbench, the INCLUDE programs included by a program are listed as its subnodes.

Addition   

... IF FOUND

Effect

The addition IF FOUND specifies that the specified [include program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninclude_program_glosry.htm "Glossary Entry") is only included if it exists. If the include program does not exist, the INCLUDE statement is ignored and no syntax error occurs at this position.

Hint

If the addition IF FOUND is specified, the including program should not be dependent on the source code of the include program. Otherwise, the include program may be syntactically correct in systems where it exists but incorrect in other systems.

Example

These lines show the [master program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmaster_program_glosry.htm "Glossary Entry") of the function pool ABAP\_DOCU, which represents the ABAP Keyword Documentation in [SAP GUI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_gui_glosry.htm "Glossary Entry"). It only contains INCLUDE statements that include the actual source code, where labap\_docutop itself is made up of include programs for the individual declarations (global data and class declarations local to the program).

\*&----------------------------------------------------------------\*
\*&  Function Pool SAPLABAP\_DOCU
\*&----------------------------------------------------------------\*
  INCLUDE labap\_docutop.               " Global Declarations
  INCLUDE labap\_docue00.               " Load of Program
  INCLUDE labap\_docuuxx.               " Function Modules
  INCLUDE labap\_docuo01.               " PBO Modules
  INCLUDE labap\_docui01.               " PAI Modules
  INCLUDE labap\_docue01.               " Handling of Runtime-Events
  INCLUDE labap\_docup01.               " Class implementations
  INCLUDE labap\_docup02.
  INCLUDE labap\_docup03.
  INCLUDE labap\_docup04.
  INCLUDE labap\_docut99.               " Unit tests


### abenabap_language_include.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Include%20Programs%2C%20ABENABAP_LANGUAGE_INCLUDE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Include Programs

Include programs are used to split [ABAP source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_source_code_glosry.htm "Glossary Entry") into individual [repository objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_object_glosry.htm "Glossary Entry"). An ABAP program can be created in the [program properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_property_glosry.htm "Glossary Entry") using the [program type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_type_glosry.htm "Glossary Entry") include program. Include programs do not need to contain program-initiating statements and cannot be generated independently of the ABAP compiler. Instead, include programs can be included in [compilation units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry") using the statement [INCLUDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_prog.htm).

An include program must contain complete statements. It can include other include programs but not it cannot include itself. An include program does not need to contain complete processing blocks.

Programming Guideline

[Do not use include programs multiple times](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmultiple_use_include_guidl.htm "Guideline")

Hints

-   For the [global declaration part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of an ABAP program, a special [top include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentop_include_glosry.htm "Glossary Entry") is available which is included in the compilation of individual include programs of a program.
-   [Master programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmaster_program_glosry.htm "Glossary Entry") such as [class pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_pool_glosry.htm "Glossary Entry") or [function pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_pool_glosry.htm "Glossary Entry") are automatically organized into include programs by the ABAP Workbench.

Continue
[INCLUDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_prog.htm)


### abenabap_macros.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Macros%2C%20ABENABAP_MACROS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Macros

Macros enable [source code modularization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_modularizat_glosry.htm "Glossary Entry") within an ABAP program. They have the following properties:

-   Defined between the statements [DEFINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-of-definition.htm) or in database table TRMAC.
-   They are [included](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_include.htm) by specifying their name.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacros_guidl.htm "Guideline")

Continue
[DEFINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine.htm)
[Inserting Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_include.htm)
![Example](exa.gif "Example") [Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_abexa.htm)


### abapdefine.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_macros.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DEFINE%2C%20ABAPDEFINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DEFINE

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine_shortref.htm)

Syntax

DEFINE macro.
  ... &1 ... &9 ...
END-OF-DEFINITION.

Effect

The statement DEFINE defines a [macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_glosry.htm "Glossary Entry") macro. The following [naming conventions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm) apply to macro and [ABAP words](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_words.htm) cannot be used. Macros can be defined in all [program types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_type_glosry.htm "Glossary Entry"), particularly in [type pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry").

Any content can be found between the statements DEFINE and END-OF-DEFINITION. A macro is not evaluated until it is included in another program, and then it must have correct syntax. Currently, a macro can only be [included](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_include.htm) in other ABAP programs using its name macro.

The validity of a macro is determined by its position in the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). It can be included in the same compilation unit at any position after END-OF-DEFINITION. If another macro is defined under the same name in a program, it overwrites the previous macro from its new position.

Within a macro, up to nine placeholders &1 ... &9 can be used instead of ABAP words and operands. These placeholders must be replaced by fixed words when the macro is inserted.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacros_guidl.htm "Guideline")

Hints

-   Breakpoints cannot be set in macros and the statements of a macro cannot be executed in individual steps in the ABAP Debugger.
-   In global classes, macros are defined in a dedicated include program.
-   Apart from in the source code of a program and in [type pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry"), macros can also be stored as cross-program macros in the table TRMAC. However no new macros should be defined in the database table TRMAC. An example of a macro stored in the table TRMAC is break, which sets a breakpoint depending on the current user name in the system field sy-uname.

Example

See [Including Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_include.htm).

Executable Example

[Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_abexa.htm)

Continue
[END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-of-definition.htm)


### abapend-of-definition.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_macros.htm) →  [DEFINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20END-OF-DEFINITION%2C%20ABAPEND-OF-DEFINITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

END-OF-DEFINITION

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine_shortref.htm)

Syntax

END-OF-DEFINITION.

Effect

The statement END-OF-DEFINITION closes a macro definition that was initiated by [DEFINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine.htm).


### abapdefine.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_macros.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DEFINE%2C%20ABAPDEFINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DEFINE

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine_shortref.htm)

Syntax

DEFINE macro.
  ... &1 ... &9 ...
END-OF-DEFINITION.

Effect

The statement DEFINE defines a [macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_glosry.htm "Glossary Entry") macro. The following [naming conventions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm) apply to macro and [ABAP words](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_words.htm) cannot be used. Macros can be defined in all [program types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_type_glosry.htm "Glossary Entry"), particularly in [type pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry").

Any content can be found between the statements DEFINE and END-OF-DEFINITION. A macro is not evaluated until it is included in another program, and then it must have correct syntax. Currently, a macro can only be [included](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_include.htm) in other ABAP programs using its name macro.

The validity of a macro is determined by its position in the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). It can be included in the same compilation unit at any position after END-OF-DEFINITION. If another macro is defined under the same name in a program, it overwrites the previous macro from its new position.

Within a macro, up to nine placeholders &1 ... &9 can be used instead of ABAP words and operands. These placeholders must be replaced by fixed words when the macro is inserted.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacros_guidl.htm "Guideline")

Hints

-   Breakpoints cannot be set in macros and the statements of a macro cannot be executed in individual steps in the ABAP Debugger.
-   In global classes, macros are defined in a dedicated include program.
-   Apart from in the source code of a program and in [type pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry"), macros can also be stored as cross-program macros in the table TRMAC. However no new macros should be defined in the database table TRMAC. An example of a macro stored in the table TRMAC is break, which sets a breakpoint depending on the current user name in the system field sy-uname.

Example

See [Including Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_include.htm).

Executable Example

[Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_abexa.htm)

Continue
[END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-of-definition.htm)


### abenmacro_include.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_macros.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Inserting%20Macros%2C%20ABENMACRO_INCLUDE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Inserting Macros

Syntax

macro *\[*p1 p2 ... *\]*.

Effect

If a macro is listed as the first word in an ABAP statement instead of a valid [ABAP keyword](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_keyword_glosry.htm "Glossary Entry"), then its content is included in the source code at this position.

To create a syntactically correct program, the included macro may only contain complete ABAP statements except for [DEFINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-of-definition.htm), and program-initiating statements. These statements create a source code section that is included in the current source code. The statements of the macro are not bound to the limits of processing blocks.

Appropriate ABAP words or operands p1, p2, ... must be passed to all placeholders of the macro. The specified operands p1, p2, replace the placeholders literally, one after another. In addition to the content of the literals, the characters are converted to uppercase letters.

The ABAP Compiler searches for a macro specified in an ABAP program as follows:

1.  In the preceding source code of the same [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry").
2.  In the [type pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry") that can be used by the program. Local macros of the program hide macros of the same name in type pools.
3.  In database table TRMAC, macros in type pools usually follow different naming conventions to those in TRMAC and therefore nothing should be hidden.

A macro can insert other macros but not itself.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacros_guidl.htm "Guideline")

Hint

In global classes, macros are defined and searched for in a dedicated include program.

Example

In this example, the two macros operation and output are defined. output is nested in operation. operation is called three times with different parameters. Note how the placeholders &1, &2, ... are literally replaced in the macros.

DATA: result TYPE i,
      n1     TYPE i VALUE 5,
      n2     TYPE i VALUE 6.
DEFINE operation.
  result = &1 &2 &3.
  output   &1 &2 &3 result.
END-OF-DEFINITION.
DEFINE output.
  write: / 'The result of &1 &2 &3 is', &4.
END-OF-DEFINITION.
operation 4 + 3.
operation 2 \*\* 7.
operation n2 - n1.

Executable Example

[Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_abexa.htm)


### abenmacro_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_macros.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Macros%2C%20ABENMACRO_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Macros

This example demonstrates how macros are created and included.

Source Code   

REPORT  DEMO\_MACRO.
DATA: x TYPE i, y TYPE i, l TYPE i.
DEFINE write\_frame.
  x = sy-colno. y = sy-linno.
  WRITE: '|' NO-GAP, &1 NO-GAP, '|' NO-GAP.
  l = sy-colno - x.
  y -= 1. SKIP TO LINE y. POSITION x.
  ULINE AT x(l).
  y += 2. SKIP TO LINE y. POSITION x.
  ULINE AT x(l).
  y -= 1. x = sy-colno. SKIP TO LINE y. POSITION x.
END-OF-DEFINITION.
SKIP.
write\_frame 'In a frame!'.

Description   

In this example, a macro write\_frame, which draws a box around the placeholder &1 on a list, is first defined and then used.


### abenabap_macros.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_includes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Macros%2C%20ABENABAP_MACROS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Macros

Macros enable [source code modularization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_modularizat_glosry.htm "Glossary Entry") within an ABAP program. They have the following properties:

-   Defined between the statements [DEFINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-of-definition.htm) or in database table TRMAC.
-   They are [included](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_include.htm) by specifying their name.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacros_guidl.htm "Guideline")

Continue
[DEFINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine.htm)
[Inserting Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_include.htm)
![Example](exa.gif "Example") [Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_abexa.htm)
