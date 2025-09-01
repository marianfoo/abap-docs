---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_enumerated_types DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. DATA html TYPE string. METHODS constructor. ENDCLASS.  Public class implementation CLASS cl_demo_enumerated_types IMPLEMENT
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_usage_abexa.htm"
abapFile: "abenenum_usage_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenenum", "usage", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20General%20Use%2C%20ABENENUM_USAGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, General Use

This example demonstrates the general use of [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_enumerated\_types DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    DATA html TYPE string.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_enumerated\_types IMPLEMENTATION.
  METHOD main.
    DATA: size   TYPE  cl\_demo\_wrap\_browser=>size
                 VALUE cl\_demo\_wrap\_browser=>sz-l,
          format TYPE  cl\_demo\_wrap\_browser=>format
                 VALUE cl\_demo\_wrap\_browser=>fmt-l.
    cl\_demo\_input=>new(
     )->add\_field( EXPORTING text = \`Size (S, M, L, XL)\`
                   CHANGING  field = size
     )->request(   EXPORTING text  = \`Format (L, P)\`
                   CHANGING  field = format ).
    cl\_demo\_wrap\_browser=>show( html   = html
                                size   = size
                                format = format ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    html = cl\_abap\_docu\_external=>get\_abap\_docu\_for\_adt(
       EXPORTING
        language = COND #( WHEN sy-langu = 'D' THEN 'DE' ELSE 'EN' )
        version  = if\_abap\_docu=>unicode ).
  ENDMETHOD.
ENDCLASS.

Description   

The class calls the method SHOW of class CL\_DEMO\_WRAP\_BROWSER. Two enumerated types are defined as follows in this class:

TYPES:
  BEGIN OF ENUM size STRUCTURE sz,
    s, m, l, xl,
  END OF ENUM size STRUCTURE sz.
TYPES:
  BEGIN OF ENUM format STRUCTURE fmt,
    l, p,
  END OF ENUM format STRUCTURE fmt.

By using [enumerated structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry"), the same name l can occur twice. The method SHOW wraps the method SHOW\_HTML of the class CL\_ABAP\_BROWSER:

METHOD show.
  cl\_abap\_browser=>show\_html(
    html\_string = html
    size    = SWITCH #(  size
                         WHEN sz-s  THEN cl\_abap\_browser=>small
                         WHEN sz-m  THEN cl\_abap\_browser=>medium
                         WHEN sz-l  THEN cl\_abap\_browser=>large
                         WHEN sz-xl THEN cl\_abap\_browser=>xlarge )
    format  = SWITCH #(  format
                         WHEN fmt-l THEN cl\_abap\_browser=>landscape
                         WHEN fmt-p THEN cl\_abap\_browser=>portrait )
    buttons = abap\_true ).
ENDMETHOD.

The input parameters size and format format of the method have the identically named enumerated types and can only contain their enumerated values. These are mapped to the corresponding constants of class CL\_ABAP\_BROWSER. These constants are to be regarded as a workaround for real enumerated types, which did not exist when CL\_ABAP\_BROWSER was developed.

Enumerated values can be entered for the size and format when the class is executed. The internal transfer to the program takes place by deserializing the character-like values to the local enumerated variables size and format. The exception for invalid values is caught internally, whereby the enumerated variables are initialized, which corresponds to the values of the enumerated constants sz-s and fmt-l.