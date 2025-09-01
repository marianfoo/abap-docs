  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Enumerated Objects (Enums)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_types_usage.htm) → 

Enums, Type Description

This example demonstrates type description in [enumerated objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_describe\_enums.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    TYPES:
      BEGIN OF ENUM size,
        s, m, l, xl, xxl,
      END OF ENUM size.
    DATA(size) = VALUE size( ).
    out->begin\_section( 'DESCRIBE FIELD' ).
    DESCRIBE FIELD size TYPE DATA(type)
                        LENGTH DATA(length) IN BYTE MODE
                        OUTPUT-LENGTH DATA(output\_length).
    out->write\_data( type
      )->write\_data( length
      )->write\_data( output\_length ).
    out->next\_section( 'CL\_ABAP\_ENUMDESCR' ).
    DATA(enum\_descr) = CAST cl\_abap\_enumdescr(
      cl\_abap\_typedescr=>describe\_by\_data( size ) ).
    out->write\_data( enum\_descr->kind
      )->write\_data( enum\_descr->type\_kind
      )->write\_data( enum\_descr->base\_type\_kind
      )->write\_data( enum\_descr->members ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_field.htm) and the type description class CL\_ABAP\_ENUMDESCR are applied to an enumerated variable size of the identically named enumerated type.