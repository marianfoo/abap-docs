# ABAP Keyword Documentation / ABAP − Reference / Program Layout / Modularization Statements / Source Code Modules

Included pages: 11


### abenabap_language_includes.htm

---
title: "Source Code Modules"
description: |
  Source code modularization is the segmentation of the source code of a program into individual units. Modularization operates independently of the segmentation of an ABAP program into processing blocks. Source code modules are implemented either as include programs(https://help.sap.com/doc/abapdoc
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm"
abapFile: "abenabap_language_includes.htm"
keywords: ["do", "abenabap", "language", "includes"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) → 

Source Code Modules

Source code modularization is the segmentation of the source code of a program into individual units. Modularization operates independently of the segmentation of an ABAP program into processing blocks.

Source code modules are implemented either as [include programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm) or as [macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm). Include programs are used to structure large programs, whereas macros are used to recycle individual parts of programs.

Continue
[Include Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm)
[Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm)


### abenabap_language_include.htm

---
title: "Include Programs"
description: |
  Include programs are used to split ABAP source code(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_source_code_glosry.htm 'Glossary Entry') into individual repository objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm 'Glossar
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm"
abapFile: "abenabap_language_include.htm"
keywords: ["do", "try", "class", "abenabap", "language", "include"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) → 

Include Programs

Include programs are used to split [ABAP source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_source_code_glosry.htm "Glossary Entry") into individual [repository objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry"). An ABAP program can be created in the [program attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") using the [program type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_type_glosry.htm "Glossary Entry") include program. Include programs do not need to contain introductory statements for programs and cannot be generated independently from the ABAP compiler. When using the statement [INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm), however, include programs can be integrated into [compilation units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompilation_unit_glosry.htm "Glossary Entry").

An include program must contain complete statements. It can include other include programs but not it cannot include itself. An include program does not need to contain complete processing blocks.

Programming Guideline

[Do not use include programs multiple times](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmultiple_use_include_guidl.htm "Guideline")

Notes

-   For the [global declaration part](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of an ABAP program, a special [top include](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentop_include_glosry.htm "Glossary Entry") is available which is included in the compilation of individual include programs of a program.

-   [Master programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") such as [class pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry") or [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry") are organized in include programs automatically by ABAP Workbench.

Continue
[INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm)


### abapinclude_prog.htm

---
title: "INCLUDE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_shortref.htm) Syntax INCLUDE incl IF FOUND. Addition: ... IF FOUND(#!ABAP_ONE_ADD@1@) Effect The statement INCLUDE includes the include program(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm"
abapFile: "abapinclude_prog.htm"
keywords: ["do", "if", "try", "class", "data", "abapinclude", "prog"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) →  [Include Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm) → 

INCLUDE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_shortref.htm)

Syntax

INCLUDE incl *\[*IF FOUND*\]*.

Addition:

[... IF FOUND](#!ABAP_ONE_ADD@1@)

Effect

The statement INCLUDE includes the [include program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninclude_program_glosry.htm "Glossary Entry") incl in this position in the source code. In syntax checks and when the program is generated by ABAP Compiler, the statement is replaced by the source code of the include program. The included INCLUDE program must consist of full statements.

If the specified include program does not exist, the syntax of the program is incorrect and cannot be executed. This error message can be suppressed by specifying the addition IF FOUND.

Programming Guidelines

-   [Use include programs to modularize source code.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_modular_guidl.htm "Guideline")
    
-   [Do not use include programs multiple times](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmultiple_use_include_guidl.htm "Guideline")
    

Notes

-   The statement INCLUDE is the only statement that can be used instead of a [statement that introduces a program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_init_statement_glosry.htm "Glossary Entry") in the first position of a program. The requirement is that, after the include program is resolved, a statement that introduces a program is located at the beginning of the including program.
    
-   [ABAP Workbench](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_workbench_glosry.htm "Glossary Entry") supports the automatic creation of include programs for specific program parts, such as the [top include](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentop_include_glosry.htm "Glossary Entry") for global declarative statements. It is advisable to always use the naming conventions proposed by ABAP Workbench. The top include can contain only declarative statements and is respected when individual include programs of a program are compiled.
    
-   In [Repository Browser](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_browser_glosry.htm "Glossary Entry") (a part of Object Navigator in ABAP Workbench), the INCLUDE programs bound by a program are executed as the subnodes of the program.
    

Addition

... IF FOUND

Effect

The addition IF FOUND dictates that the specified [include program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninclude_program_glosry.htm "Glossary Entry") can be included only if it exists. If the include program does not exist, the INCLUDE statement is ignored and no syntax error occurs here.

Note

If the addition IF FOUND is specified, it is recommended that the including program not be dependent on the source code of the include program. Otherwise, the include program may have correct syntax in systems where it exists but incorrect syntax in other systems.

Example

These lines show the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") of the function group ABAP\_DOCU. This function group displays the keyword documentation on Application Server ABAP. It only contains INCLUDE statements that embed the actual source code. labap\_docutop itself is made up of include programs for the individual declarations (global data and class declarations local to the program).

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


### abenabap_language_include.htm

---
title: "Include Programs"
description: |
  Include programs are used to split ABAP source code(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_source_code_glosry.htm 'Glossary Entry') into individual repository objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm 'Glossar
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_include.htm"
abapFile: "abenabap_language_include.htm"
keywords: ["do", "try", "class", "abenabap", "language", "include"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) → 

Include Programs

Include programs are used to split [ABAP source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_source_code_glosry.htm "Glossary Entry") into individual [repository objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry"). An ABAP program can be created in the [program attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") using the [program type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_type_glosry.htm "Glossary Entry") include program. Include programs do not need to contain introductory statements for programs and cannot be generated independently from the ABAP compiler. When using the statement [INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm), however, include programs can be integrated into [compilation units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompilation_unit_glosry.htm "Glossary Entry").

An include program must contain complete statements. It can include other include programs but not it cannot include itself. An include program does not need to contain complete processing blocks.

Programming Guideline

[Do not use include programs multiple times](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmultiple_use_include_guidl.htm "Guideline")

Notes

-   For the [global declaration part](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of an ABAP program, a special [top include](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentop_include_glosry.htm "Glossary Entry") is available which is included in the compilation of individual include programs of a program.

-   [Master programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") such as [class pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry") or [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry") are organized in include programs automatically by ABAP Workbench.

Continue
[INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_prog.htm)


### abenabap_macros.htm

---
title: "Macros"
description: |
  Macros enable source code to be modularized(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_modularizat_glosry.htm 'Glossary Entry') within an ABAP program. They have the following properties: -   They are defined between the statements DEFINE(https://help.sap.com/doc/
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm"
abapFile: "abenabap_macros.htm"
keywords: ["do", "if", "case", "try", "abenabap", "macros"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) → 

Macros

Macros enable [source code to be modularized](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_modularizat_glosry.htm "Glossary Entry") within an ABAP program. They have the following properties:

-   They are defined between the statements [DEFINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-definition.htm).

-   They are [included](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm) by their name being specified.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacros_guidl.htm "Guideline")

Continue
[DEFINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm)
[Including Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm)
![Example](exa.gif "Example") [Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm)


### abapdefine.htm

---
title: "DEFINE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine_shortref.htm) Syntax DEFINE macro. ... &1 ... &9 ... END-OF-DEFINITION. Effect The statement DEFINE defines a macro(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm 'Glossary Entr
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm"
abapFile: "abapdefine.htm"
keywords: ["insert", "do", "if", "case", "try", "class", "types", "abapdefine"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm) → 

DEFINE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine_shortref.htm)

Syntax

DEFINE macro.
  ... &1 ... &9 ...
END-OF-DEFINITION.

Effect

The statement DEFINE defines a [macro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm "Glossary Entry") macro. The following [naming conventions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) macro apply and [ABAP words](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_words.htm) cannot be used. Macros can be defined in all [program types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_type_glosry.htm "Glossary Entry"), particularly in [type groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry").

Any content can be defined between the statements DEFINE and END-OF-DEFINITION. A macro is not evaluated until it is included in another program (which must have correct syntax). Currently, a macro can only be [included](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm) in other ABAP programs using its name macro.

The validity of a macro is determined by its position in the [compilation unit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). It can be inserted at any point after END-OF-DEFINITION in the same compilation unit. If another macro is defined with the same name, it overwrites the previous macro from its new position.

Within a macro, up to nine placeholders &1 ... &9 can be used instead of ABAP words and operands. These placeholders must be replaced by fixed words when the macro is inserted.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacros_guidl.htm "Guideline")

Notes

-   Breakpoints cannot be inserted into macros and the statements of a macro cannot be performed as individual steps in ABAP Debugger.
    
-   In global classes, macros are defined in a dedicated include program.
    
-   Apart from in the source code of a program and in [type groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry"), macros can also be stored as cross-program macros in the table TRMAC. However no new macros should be defined in the TRMAC table. An example of a macro stored in the table TRMAC is break, which sets a breakpoint depending on the current user name in the system field sy-uname.
    

Example

See [Including Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm).

Executable Example

[Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm)

Continue
[END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-definition.htm)


### abapend-of-definition.htm

---
title: "END-OF-DEFINITION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine_shortref.htm) Syntax END-OF-DEFINITION. Effect The statement END-OF-DEFINITION closes a macro definition that was initiated by DEFINE(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm).
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-definition.htm"
abapFile: "abapend-of-definition.htm"
keywords: ["do", "abapend", "definition"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm) →  [DEFINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm) → 

END-OF-DEFINITION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine_shortref.htm)

Syntax

END-OF-DEFINITION.

Effect

The statement END-OF-DEFINITION closes a macro definition that was initiated by [DEFINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm).


### abapdefine.htm

---
title: "DEFINE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine_shortref.htm) Syntax DEFINE macro. ... &1 ... &9 ... END-OF-DEFINITION. Effect The statement DEFINE defines a macro(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm 'Glossary Entr
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm"
abapFile: "abapdefine.htm"
keywords: ["insert", "do", "if", "case", "try", "class", "types", "abapdefine"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm) → 

DEFINE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine_shortref.htm)

Syntax

DEFINE macro.
  ... &1 ... &9 ...
END-OF-DEFINITION.

Effect

The statement DEFINE defines a [macro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm "Glossary Entry") macro. The following [naming conventions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) macro apply and [ABAP words](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_words.htm) cannot be used. Macros can be defined in all [program types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_type_glosry.htm "Glossary Entry"), particularly in [type groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry").

Any content can be defined between the statements DEFINE and END-OF-DEFINITION. A macro is not evaluated until it is included in another program (which must have correct syntax). Currently, a macro can only be [included](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm) in other ABAP programs using its name macro.

The validity of a macro is determined by its position in the [compilation unit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). It can be inserted at any point after END-OF-DEFINITION in the same compilation unit. If another macro is defined with the same name, it overwrites the previous macro from its new position.

Within a macro, up to nine placeholders &1 ... &9 can be used instead of ABAP words and operands. These placeholders must be replaced by fixed words when the macro is inserted.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacros_guidl.htm "Guideline")

Notes

-   Breakpoints cannot be inserted into macros and the statements of a macro cannot be performed as individual steps in ABAP Debugger.
    
-   In global classes, macros are defined in a dedicated include program.
    
-   Apart from in the source code of a program and in [type groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry"), macros can also be stored as cross-program macros in the table TRMAC. However no new macros should be defined in the TRMAC table. An example of a macro stored in the table TRMAC is break, which sets a breakpoint depending on the current user name in the system field sy-uname.
    

Example

See [Including Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm).

Executable Example

[Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm)

Continue
[END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-definition.htm)


### abenmacro_include.htm

---
title: "Including Macros"
description: |
  Syntax macro p1 p2 ... . Effect If a macro is executed as the first word in an ABAP statement instead of a valid ABAP keyword(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_keyword_glosry.htm 'Glossary Entry'), its content is included at this position in the source cod
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm"
abapFile: "abenmacro_include.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenmacro", "include"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm) → 

Including Macros

Syntax

macro *\[*p1 p2 ... *\]*.

Effect

If a macro is executed as the first word in an ABAP statement instead of a valid [ABAP keyword](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_keyword_glosry.htm "Glossary Entry"), its content is included at this position in the source code.

To ensure that the program has correct syntax, the included macro must only contain full ABAP statements (except [DEFINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-definition.htm)) and introductory program statements. These statements create a source code section that is included in the current source code. The statements of a macro are not bound to the limits of processing blocks here.

Suitable ABAP words or operands p1, p2, ... must be passed to all of the placeholders of the macro. The specified operands p1, p2, replace the placeholders sequentially. The characters are transformed to uppercase letters (except for the content of character literals).

ABAP Compiler searches for a macro specified in an ABAP program as follows:

1.  In the preceding source code of the same [compilation unit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompilation_unit_glosry.htm "Glossary Entry").
    
2.  In the [type groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") that can be used for the program. Local macros of the program obscure macros of the same name in type groups.
    
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

[Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm)


### abenmacro_abexa.htm

---
title: "Macros"
description: |
  This example demonstrates how macros are created and included. Source Code REPORT  DEMO_MACRO. DATA: x TYPE i, y TYPE i, l TYPE i. DEFINE write_frame. x = sy-colno. y = sy-linno. WRITE: '' NO-GAP, &1 NO-GAP, '' NO-GAP. l = sy-colno - x. y = y - 1. SKIP TO LINE y. POSITION x. ULINE AT x(l). y = y
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm"
abapFile: "abenmacro_abexa.htm"
keywords: ["do", "data", "abenmacro", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm) → 

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


### abenabap_macros.htm

---
title: "Macros"
description: |
  Macros enable source code to be modularized(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_modularizat_glosry.htm 'Glossary Entry') within an ABAP program. They have the following properties: -   They are defined between the statements DEFINE(https://help.sap.com/doc/
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm"
abapFile: "abenabap_macros.htm"
keywords: ["do", "if", "case", "try", "abenabap", "macros"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) → 

Macros

Macros enable [source code to be modularized](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_modularizat_glosry.htm "Glossary Entry") within an ABAP program. They have the following properties:

-   They are defined between the statements [DEFINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-definition.htm).

-   They are [included](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm) by their name being specified.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacros_guidl.htm "Guideline")

Continue
[DEFINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdefine.htm)
[Including Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_include.htm)
![Example](exa.gif "Example") [Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm)
