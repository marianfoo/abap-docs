---
title: "ABAP Objects - Classes"
description: |
  This example demonstrates a class for counters. Source Code  Public class definition CLASS cl_demo_class_counter DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  CCIMP CLASS counter DEFINITION. PUBLIC SECTION. METHODS: s
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_abexa.htm"
abapFile: "abenclass_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abenclass", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Classes%2C%20ABENCLASS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Classes

This example demonstrates a class for counters.

Source Code   

\* Public class definition
CLASS cl\_demo\_class\_counter DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS counter DEFINITION.
  PUBLIC SECTION.
    METHODS: set
    IMPORTING VALUE(set\_value) TYPE i,
    increment,
    get
    EXPORTING VALUE(get\_value) TYPE i.
  PRIVATE SECTION.
    DATA count TYPE i.
ENDCLASS.
CLASS counter IMPLEMENTATION.
  METHOD set.
    count = set\_value.
  ENDMETHOD.
  METHOD increment.
    count += 1.
  ENDMETHOD.
  METHOD get.
    get\_value = count.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_class\_counter IMPLEMENTATION.
  METHOD main.
    DATA number TYPE i VALUE 5.
    FINAL(cnt) = NEW counter( ).
    cnt->set( number ).
    DO 3 TIMES.
      cnt->increment( ).
    ENDDO.
    cnt->get( IMPORTING get\_value = number ).
    out->write( number ).
  ENDMETHOD.
ENDCLASS.

Description   

The local class counter contains three public methods, set, increment, and get, which work with the private integer field count. Two of the methods have input and output parameters and therefore define the data interface of the class. The field count, on the other hand, is not visible externally.