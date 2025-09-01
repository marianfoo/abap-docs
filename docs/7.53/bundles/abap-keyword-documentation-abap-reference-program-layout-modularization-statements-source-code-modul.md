# ABAP Keyword Documentation / ABAP − Reference / Program Layout / Modularization Statements / Source Code Modules

Included pages: 11



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_language_includes.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm)
- [abenabap_language_include.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm)
- [abapinclude_prog.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm)
- [abenabap_macros.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm)
- [abapdefine.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm)
- [abapend-of-definition.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-definition.htm)
- [abenmacro_include.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm)
- [abenmacro_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm)

**Bundle Contains**: 8 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.231Z

---

### abenabap_language_includes.htm

> **📖 Official SAP Documentation**: [abenabap_language_includes.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) → 

Source Code Modules

Source code modularization is the segmentation of the source code of a program into individual units. Modularization operates independently of the segmentation of an ABAP program into processing blocks.

Source code modules are implemented either as [include programs](javascript:call_link\('abenabap_language_include.htm'\)) or as [macros](javascript:call_link\('abenabap_macros.htm'\)). Include programs are used to structure large programs, whereas macros are used to recycle individual parts of programs.

Continue
[Include Programs](javascript:call_link\('abenabap_language_include.htm'\))
[Macros](javascript:call_link\('abenabap_macros.htm'\))



**📖 Source**: [abenabap_language_includes.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm)

### abenabap_language_include.htm

> **📖 Official SAP Documentation**: [abenabap_language_include.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) → 

Include Programs

Include programs are used to split [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") into individual [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"). An ABAP program can be created in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") using the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") include program. Include programs do not need to contain introductory statements for programs and cannot be generated independently from the ABAP compiler. When using the statement [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)), however, include programs can be integrated into [compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry").

An include program must contain complete statements. It can include other include programs but not it cannot include itself. An include program does not need to contain complete processing blocks.

Programming Guideline

[Do not use include programs multiple times](javascript:call_link\('abenmultiple_use_include_guidl.htm'\) "Guideline")

Notes

-   For the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of an ABAP program, a special [top include](javascript:call_link\('abentop_include_glosry.htm'\) "Glossary Entry") is available which is included in the compilation of individual include programs of a program.

-   [Master programs](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") such as [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry") are organized in include programs automatically by ABAP Workbench.

Continue
[INCLUDE](javascript:call_link\('abapinclude_prog.htm'\))



**📖 Source**: [abenabap_language_include.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm)

### abapinclude_prog.htm

> **📖 Official SAP Documentation**: [abapinclude_prog.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) →  [Include Programs](javascript:call_link\('abenabap_language_include.htm'\)) → 

INCLUDE

[Quick Reference](javascript:call_link\('abapinclude_shortref.htm'\))

Syntax

INCLUDE incl *\[*IF FOUND*\]*.

Addition:

[... IF FOUND](#!ABAP_ONE_ADD@1@)

Effect

The statement INCLUDE includes the [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") incl in this position in the source code. In syntax checks and when the program is generated by ABAP Compiler, the statement is replaced by the source code of the include program. The included INCLUDE program must consist of full statements.

If the specified include program does not exist, the syntax of the program is incorrect and cannot be executed. This error message can be suppressed by specifying the addition IF FOUND.

Programming Guidelines

-   [Use include programs to modularize source code.](javascript:call_link\('abensource_code_modular_guidl.htm'\) "Guideline")
    
-   [Do not use include programs multiple times](javascript:call_link\('abenmultiple_use_include_guidl.htm'\) "Guideline")
    

Notes

-   The statement INCLUDE is the only statement that can be used instead of a [statement that introduces a program](javascript:call_link\('abenprogram_init_statement_glosry.htm'\) "Glossary Entry") in the first position of a program. The requirement is that, after the include program is resolved, a statement that introduces a program is located at the beginning of the including program.
    
-   [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") supports the automatic creation of include programs for specific program parts, such as the [top include](javascript:call_link\('abentop_include_glosry.htm'\) "Glossary Entry") for global declarative statements. It is advisable to always use the naming conventions proposed by ABAP Workbench. The top include can contain only declarative statements and is respected when individual include programs of a program are compiled.
    
-   In [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") (a part of Object Navigator in ABAP Workbench), the INCLUDE programs bound by a program are executed as the subnodes of the program.
    

Addition

... IF FOUND

Effect

The addition IF FOUND dictates that the specified [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") can be included only if it exists. If the include program does not exist, the INCLUDE statement is ignored and no syntax error occurs here.

Note

If the addition IF FOUND is specified, it is recommended that the including program not be dependent on the source code of the include program. Otherwise, the include program may have correct syntax in systems where it exists but incorrect syntax in other systems.

Example

These lines show the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") of the function group ABAP\_DOCU. This function group displays the keyword documentation on Application Server ABAP. It only contains INCLUDE statements that embed the actual source code. labap\_docutop itself is made up of include programs for the individual declarations (global data and class declarations local to the program).

\*&----------------------------------------------------------------\*
\*&  Function Group SAPLABAP\_DOCU
\*&----------------------------------------------------------------\*
  INCLUDE labap\_docutop.               " Global Declarations
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



**📖 Source**: [abapinclude_prog.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm)

### abenabap_language_include.htm

> **📖 Official SAP Documentation**: [abenabap_language_include.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) → 

Include Programs

Include programs are used to split [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") into individual [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"). An ABAP program can be created in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") using the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") include program. Include programs do not need to contain introductory statements for programs and cannot be generated independently from the ABAP compiler. When using the statement [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)), however, include programs can be integrated into [compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry").

An include program must contain complete statements. It can include other include programs but not it cannot include itself. An include program does not need to contain complete processing blocks.

Programming Guideline

[Do not use include programs multiple times](javascript:call_link\('abenmultiple_use_include_guidl.htm'\) "Guideline")

Notes

-   For the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of an ABAP program, a special [top include](javascript:call_link\('abentop_include_glosry.htm'\) "Glossary Entry") is available which is included in the compilation of individual include programs of a program.

-   [Master programs](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") such as [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry") are organized in include programs automatically by ABAP Workbench.

Continue
[INCLUDE](javascript:call_link\('abapinclude_prog.htm'\))



**📖 Source**: [abenabap_language_include.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm)

### abenabap_macros.htm

> **📖 Official SAP Documentation**: [abenabap_macros.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) → 

Macros

Macros enable [source code to be modularized](javascript:call_link\('abensource_code_modularizat_glosry.htm'\) "Glossary Entry") within an ABAP program. They have the following properties:

-   They are defined between the statements [DEFINE](javascript:call_link\('abapdefine.htm'\)) and [END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\)).

-   They are [included](javascript:call_link\('abenmacro_include.htm'\)) by their name being specified.

Programming Guideline

[Only use macros in exceptional cases.](javascript:call_link\('abenmacros_guidl.htm'\) "Guideline")

Continue
[DEFINE](javascript:call_link\('abapdefine.htm'\))
[Including Macros](javascript:call_link\('abenmacro_include.htm'\))
![Example](exa.gif "Example") [Macros](javascript:call_link\('abenmacro_abexa.htm'\))



**📖 Source**: [abenabap_macros.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm)

### abapdefine.htm

> **📖 Official SAP Documentation**: [abapdefine.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) →  [Macros](javascript:call_link\('abenabap_macros.htm'\)) → 

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
    
-   Apart from in the source code of a program and in [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry"), macros can also be stored as cross-program macros in the table TRMAC. However no new macros should be defined in the TRMAC table. An example of a macro stored in the table TRMAC is break, which sets a breakpoint depending on the current user name in the system field sy-uname.
    

Example

See [Including Macros](javascript:call_link\('abenmacro_include.htm'\)).

Executable Example

[Macros](javascript:call_link\('abenmacro_abexa.htm'\))

Continue
[END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\))



**📖 Source**: [abapdefine.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm)

### abapend-of-definition.htm

> **📖 Official SAP Documentation**: [abapend-of-definition.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-definition.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) →  [Macros](javascript:call_link\('abenabap_macros.htm'\)) →  [DEFINE](javascript:call_link\('abapdefine.htm'\)) → 

END-OF-DEFINITION

[Quick Reference](javascript:call_link\('abapdefine_shortref.htm'\))

Syntax

END-OF-DEFINITION.

Effect

The statement END-OF-DEFINITION closes a macro definition that was initiated by [DEFINE](javascript:call_link\('abapdefine.htm'\)).



**📖 Source**: [abapend-of-definition.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-definition.htm)

### abapdefine.htm

> **📖 Official SAP Documentation**: [abapdefine.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) →  [Macros](javascript:call_link\('abenabap_macros.htm'\)) → 

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
    
-   Apart from in the source code of a program and in [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry"), macros can also be stored as cross-program macros in the table TRMAC. However no new macros should be defined in the TRMAC table. An example of a macro stored in the table TRMAC is break, which sets a breakpoint depending on the current user name in the system field sy-uname.
    

Example

See [Including Macros](javascript:call_link\('abenmacro_include.htm'\)).

Executable Example

[Macros](javascript:call_link\('abenmacro_abexa.htm'\))

Continue
[END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\))



**📖 Source**: [abapdefine.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm)

### abenmacro_include.htm

> **📖 Official SAP Documentation**: [abenmacro_include.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) →  [Macros](javascript:call_link\('abenabap_macros.htm'\)) → 

Including Macros

Syntax

macro *\[*p1 p2 ... *\]*.

Effect

If a macro is executed as the first word in an ABAP statement instead of a valid [ABAP keyword](javascript:call_link\('abenabap_keyword_glosry.htm'\) "Glossary Entry"), its content is included at this position in the source code.

To ensure that the program has correct syntax, the included macro must only contain full ABAP statements (except [DEFINE](javascript:call_link\('abapdefine.htm'\)) and [END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\))) and introductory program statements. These statements create a source code section that is included in the current source code. The statements of a macro are not bound to the limits of processing blocks here.

Suitable ABAP words or operands p1, p2, ... must be passed to all of the placeholders of the macro. The specified operands p1, p2, replace the placeholders sequentially. The characters are transformed to uppercase letters (except for the content of character literals).

ABAP Compiler searches for a macro specified in an ABAP program as follows:

1.  In the preceding source code of the same [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry").
    
2.  In the [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") that can be used for the program. Local macros of the program obscure macros of the same name in type groups.
    
3.  In the table TRMAC. Macros in the table TRMAC usually follow different name conventions to those in type groups and therefore nothing should be obscured.

A macro can include other macros but not itself.

Note

In global classes, macros are defined in a dedicated include program and can be found in this program.

Example

In this example, the two macros operation and output are defined. output is nested in operation. operation is called three times with different parameters. It should be noted how the placeholders &1, &2, ... are replaced in the macros.

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

[Macros](javascript:call_link\('abenmacro_abexa.htm'\))



**📖 Source**: [abenmacro_include.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm)

### abenmacro_abexa.htm

> **📖 Official SAP Documentation**: [abenmacro_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) →  [Macros](javascript:call_link\('abenabap_macros.htm'\)) → 

Macros

This example demonstrates how macros are created and included.

Source Code

REPORT  DEMO\_MACRO.
DATA: x TYPE i, y TYPE i, l TYPE i.
DEFINE write\_frame.
  x = sy-colno. y = sy-linno.
  WRITE: '|' NO-GAP, &1 NO-GAP, '|' NO-GAP.
  l = sy-colno - x.
  y = y - 1. SKIP TO LINE y. POSITION x.
  ULINE AT x(l).
  y = y + 2. SKIP TO LINE y. POSITION x.
  ULINE AT x(l).
  y = y - 1. x = sy-colno. SKIP TO LINE y. POSITION x.
END-OF-DEFINITION.
SKIP.
write\_frame 'In a frame!'.

Description

This example first defines and then uses the macro write\_frame, which draws a box around the placeholder &1 in a list.



**📖 Source**: [abenmacro_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm)

### abenabap_macros.htm

> **📖 Official SAP Documentation**: [abenabap_macros.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenabap_macros.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) → 

Macros

Macros enable [source code to be modularized](javascript:call_link\('abensource_code_modularizat_glosry.htm'\) "Glossary Entry") within an ABAP program. They have the following properties:

-   They are defined between the statements [DEFINE](javascript:call_link\('abapdefine.htm'\)) and [END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\)).

-   They are [included](javascript:call_link\('abenmacro_include.htm'\)) by their name being specified.

Programming Guideline

[Only use macros in exceptional cases.](javascript:call_link\('abenmacros_guidl.htm'\) "Guideline")

Continue
[DEFINE](javascript:call_link\('abapdefine.htm'\))
[Including Macros](javascript:call_link\('abenmacro_include.htm'\))
![Example](exa.gif "Example") [Macros](javascript:call_link\('abenmacro_abexa.htm'\))
