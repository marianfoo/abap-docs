---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_declare_enums DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . ENDCLASS.  Public class implementation CLASS cl_demo_declare_enums IMPLEMENTATION. METHOD main. out->next_section( 'ABAP En
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_declaration_abexa.htm"
abapFile: "abenenum_declaration_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenenum", "declaration", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Enumerated Objects (enum)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_types_usage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20Declaration%2C%20ABENENUM_DECLARATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, Declaration

This example demonstrates the declaration of [enumerated objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_declare\_enums DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_declare\_enums IMPLEMENTATION.
  METHOD main.
    out->next\_section( 'ABAP Enumerated Type' ).
    "ABAP enumerated type with enumerated structure
    TYPES:
      BEGIN OF ENUM abap\_wd STRUCTURE abap\_wd BASE TYPE int1,
        mon,
        tue,
        wed,
        thu,
        fri,
        sat,
        sun,
      END OF ENUM abap\_wd STRUCTURE abap\_wd.
    "Addressing the enumerated structure and its components
    DATA abap\_wd\_struc LIKE abap\_wd.
    out->write( abap\_wd
      )->write( abap\_wd-fri
      )->write( abap\_wd\_struc
      )->write( abap\_wd\_struc-fri ).
    "Declaring an enumerated variable of the ABAP enumerated type
    DATA wd\_abap TYPE abap\_wd.
    "Assigning an enumerated constant
    wd\_abap = abap\_wd-tue.
    "Assigning an enumerated constant to an inline declaration
    FINAL(wd\_abap\_wed) = abap\_wd-wed.
    "Assigning enumerated constants to the variable structure
    abap\_wd\_struc = abap\_wd.
    out->write( wd\_abap
      )->write( wd\_abap\_wed
      )->write( abap\_wd\_struc ).
    out->next\_section( 'CDS Enumerated Type' ).
    "Addressing the enumerated structure and its components
    "DATA cds\_wd\_struc LIKE demo\_cds\_enum\_weekday. "Syntax error
    out->write( demo\_cds\_enum\_weekday
      )->write( demo\_cds\_enum\_weekday-fri ).
    DATA cds\_wd\_struc LIKE demo\_cds\_enum\_weekday. "No syntax error
    out->write( cds\_wd\_struc
      )->write( cds\_wd\_struc-fri ).
    "Declaring an enumerated variable of the CDS enumerated type
    DATA wd\_cds TYPE demo\_cds\_enum\_weekday.
    "Assigning an enumerated constant
    wd\_cds = demo\_cds\_enum\_weekday-tue.
    "Assigning an enumerated constant to an inline declaration
    FINAL(wd\_cds\_wed) = demo\_cds\_enum\_weekday-wed.
    "Assigning enumerated constants to the variable structure
    cds\_wd\_struc = CORRESPONDING #( demo\_cds\_enum\_weekday ).
    out->write( wd\_cds
      )->write( wd\_cds\_wed
      )->write( cds\_wd\_struc ).
  ENDMETHOD.
ENDCLASS.

Description   

This example shows enumerated objects defined with reference to an [ABAP enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_type_glosry.htm "Glossary Entry") and to an [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry"):

-   ABAP enumerated type
    -   The ABAP enumerated type abap\_wd is defined with an [enumerated structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") that has the same name.
    -   The enumerated structure abap\_wd is created by the declaration and can be referred to by LIKE to create a second structure with the same components. The second structure is not a constant structure.
    -   The components of the constant structure abap\_wd contain the [enumerated values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_value_glosry.htm "Glossary Entry") of the enumerated type.
    -   The components of the variable structure declared by LIKE contain their initial value 0 or MON respectively.
    -   A variable wd\_abap is declared with reference to the ABAP enumerated type and assigned the enumerated constant abap\_wd-tue.
    -   An [immutable variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimmutable_variable_glosry.htm "Glossary Entry") wd\_abap\_wed is declared inline and assigned the enumerated constant abap\_wd-wed.
    -   The enumerated constant structure abap\_wd is assigned to the variable structure abap\_wd\_struc declared by LIKE. Each component is assigned a different enumerated constant.
-   CDS enumerated type
    
    The CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY is defined as follows:
    
    @EndUserText.label: 'Days of the week'
    define type DEMO\_CDS\_ENUM\_WEEKDAY : abap.int1 enum
    {
      @EndUserText.label: 'Monday'
      MON = initial;
      @EndUserText.label: 'Tuesday'
      TUE =       1;
      @EndUserText.label: 'Wednesday'
      WED =       2;
      @EndUserText.label: 'Thursday'
      THU =       3;
      @EndUserText.label: 'Friday'
      FRI =       4;
      @EndUserText.label: 'Saturday'
      SAT =       5;
      @EndUserText.label: 'Sunday'
      SUN =       6;
    }
    
    It can be used in ABAP in the same way as the ABAP enumerated type with two major differences:
    
    -   The enumerated structure demo\_cds\_enum\_weekday is created with the first read access. It cannot be used after LIKE before it is used for the first time.
    -   The components of the enumerated structure demo\_cds\_enum\_weekday are ordered alphabetically and not according to the definition.

Note that only enumerated constants or variables with the same enumerated type are assigned to enumerated variables.