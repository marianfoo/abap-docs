  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_abexas.htm) → 

AMDP - AMDP Methods in Interfaces and Superclasses

This example demonstrates how AMDP methods are implemented from interfaces and superclasses.

Source Code

REPORT demo\_amdp\_polymorphism.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: iref TYPE REF TO if\_demo\_amdp\_interface,
          cref TYPE REF TO cl\_demo\_amdp\_superclass.
    IF cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cref = NEW cl\_demo\_amdp\_subclass\_hdb( ).
      iref = NEW cl\_demo\_amdp\_implement\_hdb( ).
    ELSE.
      cref = NEW cl\_demo\_amdp\_subclass\_open( ).
      iref = NEW cl\_demo\_amdp\_implement\_open( ).
    ENDIF.
    TRY.
        iref->get\_scarr( EXPORTING clnt     = sy-mandt
                         IMPORTING carriers = DATA(result1) ).
        cref->get\_scarr( EXPORTING clnt     = sy-mandt
                         IMPORTING carriers = DATA(result2) ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    ASSERT result1 = result2.
    cl\_demo\_output=>display( name = 'Result'
                             data = result1 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An interface IF\_DEMO\_AMDP\_INTERFACE and an abstract superclass CL\_DEMO\_AMDP\_SUPERCLASS implement the tag interface IF\_AMDP\_MARKER\_HDB and contain the method GET\_SCARR, which meets the prerequisites of an [AMDP method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry").

The interface method is implemented once as an AMDP method and once as a regular method in the classes CL\_DEMO\_AMDP\_IMPLEMENT\_HDB and CL\_DEMO\_AMDP\_IMPLEMENT\_OPEN. In the same way, the method of the abstract superclass is redefined in the fixed subclasses CL\_DEMO\_AMDP\_SUBCLASS\_HDB and CL\_DEMO\_AMDP\_SUBCLASS\_OPEN.

This program demonstrates how objects are created using either the AMDP method or the regular method and called polymorphically, depending on the current database.