---
title: "Conversion Rules for Structures"
description: |
  This example demonstrates how structures can be converted from one type to another. Source Code REPORT demo_data_conversion_structure. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: BEGIN OF fs1, int   TYPE i            VALUE 5,
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_conv_str_abexa.htm"
abapFile: "abendata_conv_str_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abendata", "conv", "str", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm) →  [Conversion Rules for Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_struc.htm) →  [Conversion Between Flat Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_flat-flat.htm) → 

Conversion Rules for Structures

This example demonstrates how structures can be converted from one type to another.

Source Code

REPORT demo\_data\_conversion\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF fs1,
             int   TYPE i            VALUE 5,
             pack  TYPE p DECIMALS 2 VALUE '2.26',
             text  TYPE c LENGTH 10  VALUE 'Fine Text',
             float TYPE decfloat16   VALUE '1.234e+05',
             date  TYPE d            VALUE '19950916',
          END OF fs1.
    DATA: BEGIN OF fs2,
             int  TYPE i            VALUE 3,
             pack TYPE p DECIMALS 2 VALUE '72.34',
             text TYPE c LENGTH 5   VALUE 'Hello',
          END OF fs2.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Source'
      )->write( |{ fs1-int   width = 10 } {
                   fs1-pack  width = 10 } {
                   fs1-text  width = 10 } {
                   fs1-float width = 10 } {
                   fs1-date  width = 10 }| ).
    out->next\_section( 'Target'
      )->write( |{ fs2-int  width = 10 } {
                   fs2-pack width = 10 } {
                   fs2-text width = 10 }| ).
    fs2 = fs1.
    out->next\_section( 'Result'
      )->display( |{ fs2-int  width = 10 } {
                     fs2-pack width = 10 } {
                     fs2-text width = 10 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example two different structures are defined, fs1 and fs2. The requirements of the third [conversion rule for flat structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_flat-flat.htm) apply to both structures and the corresponding rule is also used. After the assignment of fs1 to fs2, only the result for the first two components is as if they had been transferred component by component. fs2-text is filled with the first five positions from fs1-text. All the remaining elements of fs1 are not transferred.