---
title: "WITH, Client Handling"
description: |
  This example demonstrates client handling in the statement WITH(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm). Source Code REPORT demo_cte_client_handling. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DAT
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwith_client_handling_abexa.htm"
abapFile: "abenwith_client_handling_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenwith", "client", "handling", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) →  [WITH, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwith_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WITH, Client Handling, ABENWITH_CLIENT_HANDLING_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

WITH, Client Handling

This example demonstrates client handling in the statement [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm).

Source Code   

REPORT demo\_cte\_client\_handling.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA client TYPE scarr-mandt.
    cl\_demo\_input=>request( CHANGING field = client ).
    WITH
      +cte AS ( SELECT mandt, carrid, carrname
                       FROM scarr USING ALL CLIENTS )
      SELECT \*
             FROM +cte
             WHERE mandt = @client
             INTO TABLE @FINAL(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

In the subquery of the [common table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +cte, the addition USING ALL CLIENTS is used to access the client-dependent DDIC database table SCARR. This means data is read from all clients. The client column is part of the SELECT list.

The main query of the WITH statement reads the common table expressions. A restriction to one specific client is specified. The client column can be specified after WHERE since the result set of +cte is not client-dependent. The column MANDT is not used as a client column.