  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Graph Processing, ABENAMDP_GRAPH_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

AMDP - Graph Processing

This example demonstrates [graph](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengraph_glosry.htm "Glossary Entry") processing using a [graph workspace](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengraph_workspace_glosry.htm "Glossary Entry") and a [graph procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengraph_procedure_glosry.htm "Glossary Entry").

Source Code   

REPORT demo\_amdp\_graph.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      o TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    o->begin\_section( \`Demo: Graph Processing\`
    )->write\_doc( '<b>FRANKFURT -> ROME</b>' ).
    TRY.
        cl\_demo\_amdp\_graph=>get\_shortest\_path(
          EXPORTING im\_city\_from = 'FRANKFURT'
                    im\_city\_to   = 'ROME'
          IMPORTING ex\_weight    = DATA(lv\_weight)
                    ex\_route     = DATA(lt\_route) ).
        o->write( lv\_weight
        )->write( lt\_route ).
      CATCH BEFORE UNWIND cx\_amdp\_execution\_failed INTO DATA(lr\_exc).
        o->write\_doc( |Exception raised!|
        )->write\_doc( lr\_exc->sql\_message ).
    ENDTRY.
    o->line(
    )->write\_doc( '<b>ROME -> MADRID</b>' ).
    TRY.
        cl\_demo\_amdp\_graph=>get\_shortest\_path(
          EXPORTING im\_city\_from = 'ROME'
                    im\_city\_to   = 'MADRID'
          IMPORTING ex\_weight    = lv\_weight
                    ex\_route     = lt\_route ).
        o->write( lv\_weight
        )->write( lt\_route ).
      CATCH BEFORE UNWIND cx\_amdp\_execution\_failed INTO lr\_exc.
        o->write\_doc( |Exception raised!|
        )->write\_doc( lr\_exc->sql\_message ).
    ENDTRY.
    o->line(
    )->write\_doc( '<b>MADRID -> ISTANBUL</b>' ).
    TRY.
        cl\_demo\_amdp\_graph=>get\_shortest\_path(
          EXPORTING im\_city\_from = 'MADRID'
                    im\_city\_to   = 'ISTANBUL'
          IMPORTING ex\_weight    = lv\_weight
                    ex\_route     = lt\_route ).
        o->write( lv\_weight
        )->write( lt\_route ).
      CATCH BEFORE UNWIND cx\_amdp\_execution\_failed INTO lr\_exc.
        o->write\_doc( |Exception raised!|
        )->write\_doc( lr\_exc->sql\_message ).
    ENDTRY.
    o->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    o = cl\_demo\_output=>new( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example accesses a [graph procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengraph_procedure_glosry.htm "Glossary Entry") that is declared and implemented in the [AMDP class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_class_glosry.htm "Glossary Entry") CL\_DEMO\_AMDP\_GRAPH.

The method GET\_SHORTEST\_PATH is a [graph procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengraph_procedure_glosry.htm "Glossary Entry") that refers to the [graph workspace](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengraph_workspace_glosry.htm "Glossary Entry") CL\_DEMO\_AMDP\_GRAPH=>GRAPH\_WORKSPACE operating on a [graph](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengraph_glosry.htm "Glossary Entry") model which is a flight data model. The graph workspace includes the declaration of the [vertex table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvertex_table_glosry.htm "Glossary Entry") and the [edge table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenedge_table_glosry.htm "Glossary Entry").

METHOD graph\_workspace BY DATABASE GRAPH WORKSPACE FOR HDB
  LANGUAGE SQL
  USING demo\_cds\_spfli4graph demo\_cds\_sgeocity4graph.
  edge table demo\_cds\_spfli4graph
    source column cityfrom
    target column cityto
    key    column connid
  vertex table demo\_cds\_sgeocity4graph
    key    column city
ENDMETHOD.

The graph procedure is a read-only procedure that is written in [GraphScript](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengraphscript_glosry.htm "Glossary Entry"). Its purpose is to return the shortest flight connection between two cities (representing two [vertices](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvertex_glosry.htm "Glossary Entry")). The parameter ex\_weight returns the overall flight time, and the parameter ex\_route returns the a table showing some details of the round trip.

METHOD get\_shortest\_path BY DATABASE PROCEDURE FOR HDB
  LANGUAGE GRAPH OPTIONS READ-ONLY
  USING cl\_demo\_amdp\_graph=>graph\_workspace.
  Graph g = Graph ("CL\_DEMO\_AMDP\_GRAPH=>GRAPH\_WORKSPACE");
  Vertex v\_from = Vertex (:g, :im\_city\_from);
  Vertex v\_to   = Vertex (:g, :im\_city\_to);
  WeightedPath<BigInt> p\_path = Shortest\_Path (:g, :v\_from, :v\_to
    ,(Edge flight) =>
     BigInt
     {
       return BigInt( :flight.fltime );
     }  --optional weight
  );
  --Multiset<Vertex> neighborhood = Neighbors (:g, :v\_from, 1, -1);
  ex\_weight = Weight (:p\_path);
  ex\_route  = select :part.connid, :part.cityfrom, :part.cityto, :part.fltime
              foreach part in Edges( :p\_path );
ENDMETHOD.

The example shows that the first method call is fine. The second method call does not show any data because the target city is not contained in the graph model. The third method call shows the message that is raised. In this case, neither of the two cities is contained in the graph model