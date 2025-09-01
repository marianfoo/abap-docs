# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Structure and Style / Source Code Organization

Included pages: 3


### abensource_code_orga_gdl.htm

---
title: "Source Code Organization"
description: |
  ABAP source code is saved in the ABAP Repository in the standard database(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm 'Glossary Entry') of an AS ABAP, and not in source code files like in most other programming environments. Source codes can be split into
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_orga_gdl.htm"
abapFile: "abensource_code_orga_gdl.htm"
keywords: ["do", "if", "try", "data", "abensource", "code", "orga", "gdl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructure_style_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Source Code Organization, ABENSOURCE_CODE_ORGA_GDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Source Code Organization

ABAP source code is saved in the ABAP Repository in the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry") of an AS ABAP, and not in source code files like in most other programming environments. Source codes can be split into individual units by using include programs. There are also [macros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmacros_guidl.htm "Guideline") that are handled for callable modularization units in the context of these guidelines.

-   [Source code modularization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_modular_guidl.htm "Guideline")
-   [Multiple use of include programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmultiple_use_include_guidl.htm "Guideline")

Continue
[Source Code Modularization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_modular_guidl.htm)
[Multiple Use of Include Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmultiple_use_include_guidl.htm)


### abensource_code_modular_guidl.htm

---
title: "Source Code Modularization"
description: |
  Background The unit in ABAP that corresponds to a source code file capable of being inserted into another program is known as an include program. Include programs are used for source code modularization and are inserted into compilation units for this purpose. Include programs are not compilation un
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_modular_guidl.htm"
abapFile: "abensource_code_modular_guidl.htm"
keywords: ["insert", "do", "if", "try", "method", "class", "abensource", "code", "modular", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructure_style_gdl.htm) →  [Source Code Organization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_orga_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Source Code Modularization, ABENSOURCE_CODE_MODULAR_GUIDL, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Source Code Modularization

Background   

The unit in ABAP that corresponds to a source code file capable of being inserted into another program is known as an include program. Include programs are used for source code modularization and are inserted into compilation units for this purpose. Include programs are not compilation units (which means they cannot be compiled as standalone programs), but can be activated and transported separately. The [compilation units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_type_guidl.htm "Guideline") of include programs (such as class pools, interface pools, function pools, subroutine pools, or executable programs) are compilation units in which, when compiled, an INCLUDE statement is replaced by the content of the specified include program.

Rule   

Use include programs to modularize source code.

Distribute the source code of large ABAP programs across several include programs, remembering to choose a granularity for the modules that suits the structure of the program's structure.

Details   

A suitable level of source code modularization using include programs makes it easier to develop and modify larger programs in several ways:

-   The lock management of ABAP Editor works at the level of include programs. In this way, several developers can make changes to a large program at the same time, as long as the source code sections in question are in different include programs.
-   Include programs are activated separately. This means that corrections or new developments in a compilation unit can be activated independently of each other, as long as they are in separate include programs.
-   Include programs can be transported separately. In this way, specific corrections can be distributed across a system landscape without the need to transport the entire compilation unit. This minimizes the potential for conflicts between correction levels.

The [ABAP development environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dev_envir_glosry.htm "Glossary Entry") already provides modularization templates using includes for many compilation units. For example, the visibility sections and methods of global classes or function modules of a function pool are saved in separate include programs. The source code-based Class Builder displays the resolved include programs as a single programs, but saves each part separately. The top include for global declarations is also supported by ABAP Workbench and ABAP Compiler.

As well as this, you can perform manual modularization using include programs, if required. Here, you can perform some of the extra modularizations on the include programs defined by ABAP Workbench. Or you can create include programs for compilation units that are not modularized automatically (such as subroutine pools and executable programs).

Include programs that you create manually must contain a logically related section of the source code and this section must represent an independently maintainable and transportable unit. Logically related units such as individual procedures ([methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) or the declaration parts of local classes should not be distributed across multiple include programs, however. (The declaration parts of global classes are distributed automatically across multiple include programs, as specified by ABAP Compiler. There is no reason why ABAP developers should distribute local classes in the same way.)

Include programs you create manually should be named in accordance with the naming conventions of ABAP Workbench for automatically generated include programs. These conventions emphasize the relationship between the include program and the compilation unit and prevent include programs [from being used more than once](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmultiple_use_include_guidl.htm "Guideline").


### abenmultiple_use_include_guidl.htm

---
title: "Multiple Use of Include Programs"
description: |
  Background From a technical point of view, it is possible to use an include program multiple times by including it more than once into a compilation unit or different compilation units. Rule Do not use include programs more than once Use an include program for the modularization of exactly one compi
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmultiple_use_include_guidl.htm"
abapFile: "abenmultiple_use_include_guidl.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "abenmultiple", "use", "include", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructure_style_gdl.htm) →  [Source Code Organization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_orga_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Multiple Use of Include Programs, ABENMULTIPLE_USE_INCLUDE_GUIDL, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Multiple Use of Include Programs

Background   

From a technical point of view, it is possible to use an include program multiple times by including it more than once into a compilation unit or different compilation units.

Rule   

Do not use include programs more than once

Use an include program for the modularization of exactly one compilation It must not be included into multiple different compilation units. Also, an include program should only be included once within a compilation unit.

Details   

The multiple use of include programs is highly problematic conceptually. This particularly concerns the use of include programs for the reuse of:

-   Type definitions
-   Data declarations
-   Local classes
-   Procedure implementations

We strongly recommended using only suitable means for reuse, such as global classes or interfaces, for the reasons specified in the following sections.

Restricted maintainability
The inclusion of an include program into multiple compilation units dramatically restricts the maintainability both of the include program itself and of the compilation units using it. Changes to an include program like this can be unproblematic in the context of selected master programs, but can make other compilation units syntactically incorrect at the same time. This is particularly critical for compilation units that include such include programs that were developed in other systems.

Increased resource consumption
If compilation units that use shared include programs are executed at the same time, these include programs must be loaded multiple times by the ABAP runtime framework, which increases memory consumption. In the past, include programs were used multiple times for the central definition of constants, for example. Today, you should use a global interface or global class for this purpose. Because it is loaded only once, the memory consumption does not increase with every new use as it does with any multiple use of include programs.

The memory consumption also increases if an include program is used multiple times within one compilation unit (for example, through inclusion into the source code of multiple function modules of a function pool or into the source code of multiple methods of a class) because this expands the compilation unit unnecessarily. When using centrally defined, [standalone types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbound_independent_dtype_guidl.htm "Guideline") and storing required constants in suitable classes or interfaces, there remains no conceivable scenario where it would be useful to use include programs multiple times within a compilation unit.

Missing semantic context
Like source code files in other programming environments, include programs are included into a compilation unit as pure text and without any semantics. The semantics only emerge in the context of the compilation unit and the position where the include program is included. Consequently, especially class definitions that are included into different compilation units by using an include program result in different technical classes whose objects have different reference types and cannot be exchanged between the compilation units.

Bad Example

The following source code shows an include program that contains declarations of constants intended for use in multiple programs. According to the above rule, procedures of this type are no longer allowed.

\*&---------------------------------------------\*
\*& Include Z\_ORDERS\_OF\_MAGNITUDE
\*&---------------------------------------------\*
CONSTANTS:
  mega TYPE  p DECIMALS 6 VALUE '1000000.0',
  kilo TYPE  p DECIMALS 6 VALUE '1000.0',
  milli TYPE p DECIMALS 6 VALUE '0.001',
  micro TYPE p DECIMALS 6 VALUE '0.000001'.

Good Example

The following source code shows the same declarations of constants as in the above example, but this time in a global class suitable for reuse. Here, a corresponding ABAP Unit test method would even be possible that checks the consistency of the constants.

CLASS zcl\_orders\_of\_magnitude DEFINITION PUBLIC.
  PUBLIC SECTION.
    CONSTANTS:
      mega TYPE  p DECIMALS 6 VALUE '1000000.0',
      kilo TYPE  p DECIMALS 6 VALUE '1000.0',
      milli TYPE p DECIMALS 6 VALUE '0.001',
      micro TYPE p DECIMALS 6 VALUE '0.000001'.
ENDCLASS.
