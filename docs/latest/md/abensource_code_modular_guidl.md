---
title: "Source Code Modularization"
description: |
  Background The unit in ABAP that corresponds to a source code file capable of being inserted into another program is known as an include program. Include programs are used for source code modularization and are inserted into compilation units for this purpose. Include programs are not compilation un
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_modular_guidl.htm"
abapFile: "abensource_code_modular_guidl.htm"
keywords: ["insert", "do", "if", "try", "method", "class", "abensource", "code", "modular", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm) →  [Source Code Organization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_orga_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Source%20Code%20Modularization%2C%20ABENSOURCE_CODE_MODULAR_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Source Code Modularization

Background   

The unit in ABAP that corresponds to a source code file capable of being inserted into another program is known as an include program. Include programs are used for source code modularization and are inserted into compilation units for this purpose. Include programs are not compilation units (which means they cannot be compiled as standalone programs), but can be activated and transported separately. The [compilation units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_type_guidl.htm "Guideline") of include programs (such as class pools, interface pools, function pools, subroutine pools, or executable programs) are compilation units in which, when compiled, an INCLUDE statement is replaced by the content of the specified include program.

Rule   

Use include programs to modularize source code.

Distribute the source code of large ABAP programs across several include programs, remembering to choose a granularity for the modules that suits the structure of the program's structure.

Details   

A suitable level of source code modularization using include programs makes it easier to develop and modify larger programs in several ways:

-   The lock management of ABAP Editor works at the level of include programs. In this way, several developers can make changes to a large program at the same time, as long as the source code sections in question are in different include programs.
-   Include programs are activated separately. This means that corrections or new developments in a compilation unit can be activated independently of each other, as long as they are in separate include programs.
-   Include programs can be transported separately. In this way, specific corrections can be distributed across a system landscape without the need to transport the entire compilation unit. This minimizes the potential for conflicts between correction levels.

The [ABAP development environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dev_envir_glosry.htm "Glossary Entry") already provides modularization templates using includes for many compilation units. For example, the visibility sections and methods of global classes or function modules of a function pool are saved in separate include programs. The source code-based Class Builder displays the resolved include programs as a single programs, but saves each part separately. The top include for global declarations is also supported by ABAP Workbench and ABAP Compiler.

As well as this, you can perform manual modularization using include programs, if required. Here, you can perform some of the extra modularizations on the include programs defined by ABAP Workbench. Or you can create include programs for compilation units that are not modularized automatically (such as subroutine pools and executable programs).

Include programs that you create manually must contain a logically related section of the source code and this section must represent an independently maintainable and transportable unit. Logically related units such as individual procedures ([methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) or the declaration parts of local classes should not be distributed across multiple include programs, however. (The declaration parts of global classes are distributed automatically across multiple include programs, as specified by ABAP Compiler. There is no reason why ABAP developers should distribute local classes in the same way.)

Include programs you create manually should be named in accordance with the naming conventions of ABAP Workbench for automatically generated include programs. These conventions emphasize the relationship between the include program and the compilation unit and prevent include programs [from being used more than once](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmultiple_use_include_guidl.htm "Guideline").