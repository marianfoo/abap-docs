  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Enumerated Objects (enum)](javascript:call_link\('abenenumerated_types_usage.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20enum%2C%20Type%20Description%2C%20ABENENUM_DESCRIPTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

enum, Type Description

This example demonstrates type description for [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_describe\_enums DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_describe\_enums IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF ENUM size,
        s, m, l, xl, xxl,
      END OF ENUM size.
    FINAL(size) = VALUE size( ).
    out->begin\_section( 'DESCRIBE FIELD' ).
    DESCRIBE FIELD size TYPE FINAL(type)
                        LENGTH FINAL(length) IN BYTE MODE
                        OUTPUT-LENGTH FINAL(output\_length).
    out->write\_data( type
      )->write\_data( length
      )->write\_data( output\_length ).
    out->next\_section( 'CL\_ABAP\_ENUMDESCR' ).
    FINAL(enum\_descr) = CAST cl\_abap\_enumdescr(
      cl\_abap\_typedescr=>describe\_by\_data( size ) ).
    out->write\_data( enum\_descr->kind
      )->write\_data( enum\_descr->type\_kind
      )->write\_data( enum\_descr->base\_type\_kind
      )->write\_data( enum\_descr->members ).
  ENDMETHOD.
ENDCLASS.

Description   

The statement [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)) and the type description class CL\_ABAP\_ENUMDESCR return properties of an enumerated variable size of an identically named enumerated type.

See also [CDS Enumerated Type, Type Description](javascript:call_link\('abencds_enum_description_abexa.htm'\))