---
title: "Conversion Rules for Structures"
description: |
  This example demonstrates how structures can be converted from one type to another. Source Code  Public class definition CLASS cl_demo_data_conversion_struct DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_conv_str_abexa.htm"
abapFile: "abendata_conv_str_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abendata", "conv", "str", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm) →  [Conversion Rules for Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_struc.htm) →  [Conversion Between Flat Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_flat_flat.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Conversion%20Rules%20for%20Structures%2C%20ABENDATA_CONV_STR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Conversion Rules for Structures

This example demonstrates how structures can be converted from one type to another.

Source Code   

\* Public class definition
CLASS cl\_demo\_data\_conversion\_struct DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_data\_conversion\_struct IMPLEMENTATION.
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
    out->begin\_section( 'Source'
      )->write( |{ fs1-int   WIDTH = 10 } {
                   fs1-pack  WIDTH = 10 } {
                   fs1-text  WIDTH = 10 } {
                   fs1-float WIDTH = 10 } {
                   fs1-date  WIDTH = 10 }| ).
    out->next\_section( 'Target'
      )->write( |{ fs2-int  WIDTH = 10 } {
                   fs2-pack WIDTH = 10 } {
                   fs2-text WIDTH = 10 }| ).
    fs2 = fs1.
    out->next\_section( 'Result'
      )->write( |{ fs2-int  WIDTH = 10 } {
                     fs2-pack WIDTH = 10 } {
                     fs2-text WIDTH = 10 }| ).
  ENDMETHOD.
ENDCLASS.

Description   

In this example, two different structures are defined, fs1 and fs2. The prerequisites of the third [conversion rule for flat structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_flat_flat.htm) apply to both structures and the corresponding rule is also applied. After the assignment of fs1 to fs2, only the result for the first two components is the same as if they were passed component by component. fs2-text is filled with the first five places from fs1-text. None of the remaining components of fs1 are passed.