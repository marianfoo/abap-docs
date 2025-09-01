---
title: "Declaration of a Simple Structure"
description: |
  This example demonstrates the declaration of a simple structure. Source Code REPORT demo_simple_structure. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: BEGIN OF address, name   TYPE string VALUE `Mr. Duncan Pea`, street TYPE s
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensimple_structure_abexa.htm"
abapFile: "abensimple_structure_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "types", "abensimple", "structure", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm) →  [DATA - BEGIN OF struc](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_struc.htm) → 

Declaration of a Simple Structure

This example demonstrates the declaration of a simple structure.

Source Code

REPORT demo\_simple\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF address,
        name   TYPE string VALUE \`Mr. Duncan Pea\`,
        street TYPE string VALUE \`Vegetable Lane 11\`,
        city   TYPE string VALUE \`349875 Botanica\`,
      END OF address.
    cl\_demo\_output=>display( address ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Declaration of a simple local structure address with three elementary components to which start values are assigned. When the method DISPLAY of class CL\_DEMO\_OUTPUT is called, the whole structure is addressed.