  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, ABAP class](javascript:call_link\('abencds_f1_custom_query.htm'\)) → 

CDS DDL - DEFINE CUSTOM ENTITY, Implementing a Custom Query

This example demonstrates how an ABAP method can be used for data provisioning in a CDS custom entity.

Source Code

REPORT demo\_consume\_bs\_custom\_query.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(service\_binding) = \`DEMO\_SB\_CUSTOM\_QUERY\`.
    DATA(entity)          = \`DEMO\_CDS\_CUSTOM\_ENTITY\`.
    DATA(p\_number) = \`10\`.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = p\_number
       )->request( ).
    IF p\_number CN '0123456789' OR p\_number < 1 OR p\_number > 100.
      cl\_demo\_output=>display( 'Enter a number between 1 and 100' ).
      RETURN.
    ENDIF.
    TRY.
        cl\_demo\_bs\_consumption=>new( service\_binding )->odata\_to\_itab(
          EXPORTING
            parameters      = VALUE #( ( p\_number ) )
          IMPORTING
            itab            = DATA(itab) ).
      CATCH cx\_demo\_bs\_consumption INTO DATA(exc).
        cl\_demo\_output=>display\_text( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    ASSIGN itab->\* TO FIELD-SYMBOL(<itab>).
    cl\_demo\_output=>display( <itab> ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The CDS custom entity DEMO\_CDS\_CUSTOM\_ENTITY is bound to the ABAP class CL\_DEMO\_CUSTOM\_ENTITY\_QUERY. This class implements the interface IF\_RAP\_QUERY\_PROVIDER and generates an internal table with newly created UUID values. The number of UUID values can be passed as parameter.

The example accesses the CDS custom entity DEMO\_CDS\_CUSTOM\_ENTITY and fills it with data using the [service binding](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry") DEMO\_SB\_CUSTOM\_QUERY, which binds the service definition DEMO\_SD\_CUSTOM\_ENTITY to an OData node in [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry"). This is done using the demonstration class CL\_DEMO\_BS\_CONSUMPTION, which accesses the OData service of the service binding by using an [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") client.

Program DEMO\_BS\_CUSTOM\_QUERY\_URL displays an URL that can be copied and pasted to a web browser in order to display the OData data in XML or JSON format.

It should be noted that no data is queried from the database in this example and that the data is generated from ABAP only.