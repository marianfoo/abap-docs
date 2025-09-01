  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm) →  [CDS DDL - projection\_view, element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element_list.htm) →  [CDS DDL - projection\_view, VIRTUAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_virtual_element.htm) → 

CDS DDL - projection\_view, calculating a virtual element

This example demonstrates how a [virtual element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") is calculated at runtime.

Source Code

REPORT demo\_consume\_bs\_proj\_view\_virt.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(service\_binding) = \`DEMO\_SB\_SALES\_PV\_SO\_EXP\`.
    DATA(entity)          = \`DEMO\_SALES\_PV\_SO\_EXP\`.
    SELECT \*
           FROM demo\_sales\_pv\_so\_exp
           INTO TABLE @DATA(from\_select).               "#EC CI\_NOWHERE
    cl\_demo\_output=>write( from\_select ).
    DATA from\_bs TYPE STANDARD TABLE OF demo\_sales\_pv\_so\_exp
                 WITH EMPTY KEY.
    TRY.
        /iwbep/cl\_cp\_client\_proxy\_fact=>create\_v2\_local\_proxy(
          VALUE #( service\_id      = service\_binding
                   service\_version = '0001' )
           )->create\_resource\_for\_entity\_set( CONV #( entity )
           )->create\_request\_for\_read(
           )->execute(
           )->get\_business\_data(
                IMPORTING et\_business\_data = from\_bs ).
        cl\_demo\_output=>display( from\_bs ).
      CATCH /iwbep/cx\_gateway INTO DATA(exc2).
        cl\_demo\_output=>display( exc2->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example accesses the CDS projection view DEMO\_SALES\_PV\_SO\_EXP in which a virtual element expiry\_date is bound to an ABAP class CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT:

-   First, it reads data from the view using an ABAP SQL SELECT statement.

-   Second, it reads data from the view using the [service binding](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_binding_glosry.htm "Glossary Entry") DEMO\_SB\_SALES\_PV\_SO\_EXP. For that, an OData Client Proxy is used, that accesses the OData service of the service binding.

When using ABAP SQL, the class CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT is not accessed and the virtual element is not calculated. When using the service binding, the class CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT is accessed. When using the OData service, the results of the query are provided by the [SADL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensadl_glosry.htm "Glossary Entry") framework. The SADL framework uses ABAP SQL and also calls the method for calculating the virtual element.