---
title: "Declaration of Variables"
description: |
  Background Variables can be declared in the following contexts: -   As attributes of global classes and interfaces across programs -   Locally in the program -   in the global declaration part of a program -   as attributes of local classes and interfaces -   in procedures (Methods(https://help.sa
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_variables_guidl.htm"
abapFile: "abendeclaration_variables_guidl.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "field-symbol", "abendeclaration", "variables", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrobust_abap_gdl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_type_obj_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Declaration%20of%20Variables%2C%20ABENDECLARATION_VARIABLES_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Declaration of Variables

Background   

Variables can be declared in the following contexts:

-   As attributes of global classes and interfaces across programs
-   Locally in the program
    -   in the global declaration part of a program
    -   as attributes of local classes and interfaces
    -   in procedures ([Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline"))

Variables that are declared within most of the event blocks or dialog modules as well as between completed processing blocks also belong to the global declaration part of a program, but violate the rule [implement global declarations centrally](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_declar_guidl.htm "Guideline").

Program-local variables that are declared in the global declaration part of a program are generally referred to as global variables.

Rule   

Do not declare global variables

Do not declare variables in the global declaration part of a program. Variables may only be declared as attributes of classes and interfaces or locally in methods.

Details   

This rule is directly derived from the basic rule [use ABAP objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"). If you disregard helper variables in procedures ([methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")), the content of the variable of a program indicates the state of the program and consequently the state of an application. In object-oriented programming, the class replaces the program, and the state of an application is no longer the state of the programs but the state of the classes or objects.

Furthermore, the rule [exploit the benefits of encapsulation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenencapsulation_guidl.htm "Guideline") also assumes a critical role. The data of an application is sufficiently protected from misuse only in the visibility sections of classes.

Except for the following exception, you should not declare any global variables in a new ABAP program. They indicate a poor programming style that disregards proven concepts such as task sharing and encapsulation. If you need to access the same data of a program from multiple local classes and interfaces, you must create them in an appropriate visibility section of a local class or an interface. These can also be local classes or interfaces that contain nothing but such attributes.

Hint

The above rule also applies to the declaration of [field symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendyn_access_data_obj_guidl.htm "Guideline") with the FIELD-SYMBOLS statement.

Exception

If classic dynpros and selections screens are still used instead of [SAPUI5](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_tech_guidl.htm "Guideline") or [Web Dynpro ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_tech_guidl.htm "Guideline"), global variables are required as interfaces for the communication between ABAP and classic dynpros. Global variables can be declared using the following statements for this purpose alone:

-   DATA, [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_work_area_guidl.htm "Guideline") and CONTROLS for general dynpros
-   PARAMETERS and SELECT-OPTIONS for selection screens

In these cases, you have to ensure the maximum possible [encapsulation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenencap_class_interf_guidl.htm "Guideline") of those global variables.

Bad Example

The following source code shows the top include of a function pool for document display. In addition to the required interface work area, which is declared with TABLES, further global variables exist that indicate the state of the display. However, according to the above rule, you are not allowed to use global variables for purposes other than communication with a classic dynpro.

FUNCTION-POOL show\_documents.
TABLES document\_structure.
DATA: g\_language TYPE sy-langu,
      g\_display\_mode TYPE ...
      ...
CLASS screen\_handler DEFINITION.
  PUBLIC SECTION.
    ...

Good Example

The following source code shows an improved example. The previously global variables are encapsulated in a class that is specifically provided for the state of the display, and can be addressed using display\_status=> in the other classes of the program.

FUNCTION-POOL show\_documents.
TABLES document\_structure.
CLASS display\_status DEFINITION.
  PUBLIC SECTION.
      CLASS-DATA: language TYPE sy-langu,
                  display\_mode TYPE ...
                  ...
ENDCLASS.
CLASS screen\_handler DEFINITION.
  PUBLIC SECTION.
  ...