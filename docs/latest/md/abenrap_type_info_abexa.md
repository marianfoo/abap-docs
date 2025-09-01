  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_system_classes.htm) →  [CL\_ABAP\_BEHVDESCR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcl_abap_behvdescr.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Getting%20BDEF%20Derived%20Type%20Information%20Using%20CL_ABAP_BEHVDESCR%2C%20ABENRAP_TYPE_INFO_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

Getting BDEF Derived Type Information Using CL\_ABAP\_BEHVDESCR

This example demonstrates various methods of the CL\_ABAP\_BEHVDESCR class.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_behvdescr DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_behvdescr IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demonstrating Methods of Class \` &&
      \`cl\_abap\_behvdescr\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Getting information on root entities
    out->next\_section( \`get\_root / get\_roots\_of\_entities\` ).
    DATA(ent1) = CONV abp\_entity\_name( 'DEMO\_MANAGED\_CHILD' ).
    DATA(ent2) = CONV abp\_entity\_name( 'DEMO\_RAP\_EXTENSIBLE\_CHILD' ).
    cl\_abap\_behvdescr=>get\_roots\_of\_entities(
      EXPORTING
        entities     = VALUE abp\_entity\_name\_tab( ( ent1 )
                                                  ( ent2 ) )
      IMPORTING
        entity\_roots = DATA(roots) ).
    out->write( roots ).
    DATA(root) = cl\_abap\_behvdescr=>get\_root( p\_entity = ent1 ).
    out->write\_data( root ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Getting type information/absolute type name
    out->next\_section( \`get\_type / get\_abs\_typename\` ).
    "Creating a type description object
    DATA(tdo) = cl\_abap\_behvdescr=>get\_type(
      p\_name = 'DEMO\_MANAGED\_CHILD\_4'
      p\_root = 'DEMO\_MANAGED\_ROOT\_4'
      p\_kind = if\_abap\_behv=>typekind-result
      p\_op   = if\_abap\_behv=>op-r-read
    ).
    out->write( tdo ).
    "Getting absolute name using the created type description object
    DATA(abs\_itab) = tdo->absolute\_name.
    "Getting absolute name using the get\_abs\_typename method
    "The p\_structure parameter is flagged. Therefore, a structured type
    "is created.
    DATA(abs\_struc) = cl\_abap\_behvdescr=>get\_abs\_typename(
      p\_name      = 'DEMO\_MANAGED\_CHILD\_4'
      p\_root      = 'DEMO\_MANAGED\_ROOT\_4'
      p\_kind      = if\_abap\_behv=>typekind-result
      p\_op        = if\_abap\_behv=>op-m-create
      p\_structure = 'X' ).
    out->write\_data( abs\_itab ).
    out->write\_data( abs\_struc ).
    "Using the type description objects and absolute names to create
    "anonymous data objects dynamically
    DATA dref TYPE REF TO data.
    CREATE DATA dref TYPE HANDLE tdo.
    "Using the dynamically created internal table in an EML statement
    READ ENTITY demo\_managed\_child\_4
      ALL FIELDS WITH VALUE #( ( key\_field       = 1
                                 key\_field\_child = 10 ) )
      RESULT dref->\*.
    out->write\_data( dref->\* ).
    "Using absolute name
    CREATE DATA dref TYPE (abs\_itab).
    READ ENTITY demo\_managed\_child\_4
      ALL FIELDS WITH VALUE #( ( key\_field       = 2
                                 key\_field\_child = 20 ) )
      RESULT dref->\*.
    out->write\_data( dref->\* ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Creating data object with BDEF derived type
    out->next\_section( \`create\_data\` ).
    DATA(der\_type) = cl\_abap\_behvdescr=>create\_data(
      p\_name = 'DEMO\_MANAGED\_CHILD\_4'
      p\_root = 'DEMO\_MANAGED\_ROOT\_4'
      p\_kind = if\_abap\_behv=>typekind-import
      p\_op   = if\_abap\_behv=>op-r-read
    ).
    "Getting absolute name using RTTI
    DATA(abs\_der) = cl\_abap\_typedescr=>describe\_by\_data( der\_type->\*
      )->absolute\_name.
    out->write\_data( abs\_der ).
    "Using the created data object in an EML statement
    DATA itab TYPE TABLE OF demo\_managed\_child\_4.
    itab = VALUE #( ( key\_field = 1 key\_field\_child = 10 ) ).
    der\_type->\* = CORRESPONDING #( itab ).
    READ ENTITY demo\_managed\_child\_4
      ALL FIELDS WITH der\_type->\*
      RESULT DATA(read\_result).
    out->write\_data( read\_result ).
    "Type description object for a structured type
    DATA(der\_s) = cl\_abap\_behvdescr=>get\_type(
      p\_name      = 'DEMO\_MANAGED\_CHILD\_4'
      p\_root      = 'DEMO\_MANAGED\_ROOT\_4'
      p\_kind      = if\_abap\_behv=>typekind-result
      p\_op        = if\_abap\_behv=>op-r-read
      p\_structure = 'X'
    ).
    "Creating an anonymous structure
    DATA dref\_struc TYPE REF TO data.
    CREATE DATA dref\_struc TYPE HANDLE der\_s.
    "Creating an internal table based on the structure
    DATA der\_itab TYPE REF TO data.
    CREATE DATA der\_itab LIKE TABLE OF dref\_struc->\*.
    "Using the internal table in an EML statement
    READ ENTITY demo\_managed\_child\_4
      ALL FIELDS WITH VALUE #( ( key\_field = 1 key\_field\_child = 10 )
                               ( key\_field = 2 key\_field\_child = 20 ) )
      RESULT der\_itab->\*.
    "Filling the anonymous structure
    READ TABLE der\_itab->\* INTO dref\_struc->\* WITH KEY
      ('KEY\_FIELD') = 2.
    out->write\_data( dref\_struc->\* ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Getting/Setting %control fields
    out->next\_section( \`get\_control\_fields / set\_control\_flag \`
      && \`get\_control\_flag\` ).
    "get\_control\_fields
    DATA der TYPE TABLE FOR CREATE demo\_managed\_root\_4.
    der = VALUE #( ( %cid               = 'cid1'
                     key\_field          = 1
                     %control-key\_field = if\_abap\_behv=>mk-on
                     field1             = 'aaa\_cr'
                     %control-field1    = if\_abap\_behv=>mk-on
                     field2             = 'bbb\_cr'
                     %control-field2    = if\_abap\_behv=>mk-off
                     field3             = 2
                     %control-field3    = if\_abap\_behv=>mk-on
                     field4             = 3
                     %control-field4    = if\_abap\_behv=>mk-on ) ).
    DATA(ctrl) = cl\_abap\_behvdescr=>get\_control\_fields( p\_data = der ).
    out->write\_data( ctrl ).
    ctrl = cl\_abap\_behvdescr=>get\_control\_fields(
      p\_data = der
      p\_flag = cl\_abap\_behv=>flag\_null ).
    out->write\_data( ctrl ).
    "set\_control\_flag
    cl\_abap\_behvdescr=>set\_control\_flag(
      EXPORTING
        p\_fields = VALUE #( ( \`FIELD1\` )
                            ( \`FIELD4\` ) )
        p\_flag   = cl\_abap\_behv=>flag\_null
      CHANGING
        p\_data   = der ).
    cl\_abap\_behvdescr=>set\_control\_flag(
      EXPORTING
        p\_fields = VALUE #( ( \`FIELD2\` ) )
        p\_flag   = cl\_abap\_behv=>flag\_changed
      CHANGING
        p\_data   = der ).
    out->write\_data( der\[ 1 \]-%control ).
    "get\_control\_flag
    cl\_abap\_behvdescr=>get\_control\_flag(
      EXPORTING
        p\_fields = VALUE #( ( \`FIELD1\` ) )
        p\_data   = der
      IMPORTING
        p\_flag   = DATA(get\_ctrl) ).
    out->write\_data( get\_ctrl ).
    cl\_abap\_behvdescr=>get\_control\_flag(
      EXPORTING
        p\_fields = VALUE #( ( \`FIELD2\` ) )
        p\_data   = der
      IMPORTING
        p\_flag   = get\_ctrl ).
    out->write\_data( get\_ctrl ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Getting foreign entities/alias names
    out->next\_section( \`get\_foreign\_entities\` ).
    DATA(f\_ent) = cl\_abap\_behvdescr=>get\_foreign\_entities(
      CONV abp\_entity\_name( 'DEMO\_UNMANAGED\_MAP\_MESSAGES' ) ).
    out->write\_data( f\_ent ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Get API classifications
    out->next\_section( \`get\_contracts\` ).
    cl\_abap\_behvdescr=>get\_contracts(
      EXPORTING
        name      = 'CL\_DEMO\_CLASSIFIED\_APIS'
        kind      = 'K'
      IMPORTING
        contracts = DATA(contracts) ).
    out->write\_data( contracts ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_child\_3.
    MODIFY demo\_tab\_child\_3 FROM TABLE @( VALUE #(
      ( key\_field       = 1
        key\_field\_child = 10
        field1          = \`abc\`
        field2          = \`def\`
        field3          = 100
        field4          = 1000 )
      ( key\_field       = 2
        key\_field\_child = 20
        field1          = \`ghi\`
        field2          = \`jkl\`
        field3          = 200
        field4          = 2000 ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The class demonstrates various methods of the CL\_ABAP\_BEHVDESCR class, for example, for getting [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") information or creating types.