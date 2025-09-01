  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_custom_entity.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, ABAP Class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_custom_query.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20CUSTOM%20ENTITY%2C%20Implementing%20a%20Custom%20Query%2C%20ABENCDS_CUSTOM_QUERY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion%20for%20improvement:)

CDS DDL - DEFINE CUSTOM ENTITY, Implementing a Custom Query

This example demonstrates how an ABAP method can be used for data provisioning in a CDS custom entity.

Source Code   

\* Public class definition
CLASS cl\_demo\_consume\_bs\_cstm\_query DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_consume\_bs\_cstm\_query IMPLEMENTATION.
  METHOD main.
    FINAL(service\_binding) = \`DEMO\_SB\_CUSTOM\_QUERY\`.
    FINAL(entity)          = \`DEMO\_CDS\_CUSTOM\_ENTITY\`.
    DATA(p\_number) = \`10\`.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = p\_number
       )->request( ).
    IF p\_number CN '0123456789' OR p\_number < 1 OR p\_number > 100.
      out->write( 'Enter a number between 1 and 100' ).
      RETURN.
    ENDIF.
    TRY.
        cl\_demo\_bs\_consumption=>new( service\_binding )->odata\_to\_itab(
          EXPORTING
            parameters      = VALUE #( ( p\_number ) )
          IMPORTING
            itab            = FINAL(itab) ).
      CATCH cx\_demo\_bs\_consumption INTO FINAL(exc).
        out->write\_text( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write( itab->\* ).
  ENDMETHOD.
ENDCLASS.

Description   

The CDS custom entity DEMO\_CDS\_CUSTOM\_ENTITY is bound to the ABAP class CL\_DEMO\_CUSTOM\_ENTITY\_QUERY. This class implements the interface IF\_RAP\_QUERY\_PROVIDER and generates an internal table with newly created UUID values. The number of UUID values can be passed as parameter.

The example accesses the CDS custom entity DEMO\_CDS\_CUSTOM\_ENTITY and fills it with data using the [service binding](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_binding_glosry.htm "Glossary Entry") DEMO\_SB\_CUSTOM\_QUERY, which binds the service definition DEMO\_SD\_CUSTOM\_ENTITY to an OData node in [ICF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_glosry.htm "Glossary Entry"). This is done using the demonstration class CL\_DEMO\_BS\_CONSUMPTION, which accesses the OData service of the service binding by using an [ICF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_glosry.htm "Glossary Entry") client.

Class CL\_DEMO\_BS\_CUSTOM\_QUERY\_URL displays a URL that can be copied and pasted to a web browser in order to display the OData data in XML or JSON format.

It should be noted that no data is queried from the database in this example and that the data is generated from ABAP only.