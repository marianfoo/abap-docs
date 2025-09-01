  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20AMDP%20Methods%20in%20Interfaces%20and%20Superclasses%2C%20ABENAMDP_POLYMORPHISM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n%20for%20improvement:)

AMDP - AMDP Methods in Interfaces and Superclasses

This example demonstrates how AMDP methods are implemented from interfaces and superclasses.

Source Code   

\* Public class definition
CLASS cl\_demo\_amdp\_polymorphism DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_amdp\_polymorphism IMPLEMENTATION.
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
                         IMPORTING carriers = FINAL(result1) ).
        cref->get\_scarr( EXPORTING clnt     = sy-mandt
                         IMPORTING carriers = FINAL(result2) ).
      CATCH cx\_amdp\_error INTO FINAL(amdp\_error).
        out->write( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    ASSERT result1 = result2.
    out->write( name = 'Result'
                             data = result1 ).
  ENDMETHOD.
ENDCLASS.

Description   

An interface IF\_DEMO\_AMDP\_INTERFACE and an abstract superclass CL\_DEMO\_AMDP\_SUPERCLASS implement the tag interface IF\_AMDP\_MARKER\_HDB and contain the method GET\_SCARR, which meets the prerequisites of an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").

The interface method is implemented once as an AMDP method and once as a regular method in the classes CL\_DEMO\_AMDP\_IMPLEMENT\_HDB and CL\_DEMO\_AMDP\_IMPLEMENT\_OPEN. In the same way, the method of the abstract superclass is redefined in the fixed subclasses CL\_DEMO\_AMDP\_SUBCLASS\_HDB and CL\_DEMO\_AMDP\_SUBCLASS\_OPEN.

This class demonstrates how objects are created using either the AMDP method or the regular method and called polymorphically, depending on the current database.