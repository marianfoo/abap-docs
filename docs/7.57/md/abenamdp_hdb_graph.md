  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\)) →  [METHOD, BY DATABASE PROCEDURE, FUNCTION, GRAPH WORKSPACE](javascript:call_link\('abapmethod_by_db_proc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Graph Processing, ABENAMDP_HDB_GRAPH, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

AMDP - Graph Processing

[AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") supports two [SAP HANA](javascript:call_link\('abensap_hana_glosry.htm'\) "Glossary Entry") artifacts for processing [graphs](javascript:call_link\('abengraph_glosry.htm'\) "Glossary Entry"):

-   [Graph workspaces](javascript:call_link\('abengraph_workspace_glosry.htm'\) "Glossary Entry")
-   [Graph procedures](javascript:call_link\('abengraph_procedure_glosry.htm'\) "Glossary Entry")

Graph workspaces can be consumed by [graph procedures](javascript:call_link\('abengraph_procedure_glosry.htm'\) "Glossary Entry") using [GraphScript](javascript:call_link\('abengraphscript_glosry.htm'\) "Glossary Entry") which is the implementation language of an [AMDP method](javascript:call_link\('abenamdp_methods.htm'\)) that specifies the addition [FOR HDB LANGUAGE GRAPH](javascript:call_link\('abapmethod_by_db_proc.htm'\)) in the METHOD statement. In contrast to [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry"), methods in this context operate on non-procedural database objects ([DDL objects](javascript:call_link\('abenddl_object_glosry.htm'\) "Glossary Entry")).

Further Information

SAP HANA Graph Reference

Graph Workspace   

Graph workspaces are created in [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") that declare a [vertex table](javascript:call_link\('abenvertex_table_glosry.htm'\) "Glossary Entry") and an [edge table](javascript:call_link\('abenedge_table_glosry.htm'\) "Glossary Entry") as sources for a [graph](javascript:call_link\('abengraph_glosry.htm'\) "Glossary Entry") model.

The declaration consists of the key column of a vertex table ([vertex key](javascript:call_link\('abenvertex_key_glosry.htm'\) "Glossary Entry")) and the key column of an edge table ([edge key](javascript:call_link\('abenedge_key_glosry.htm'\) "Glossary Entry")), as well as a source and a target column of an edge table. Currently, graph workspaces are restricted to one key column, and one source and target column.

Note: Graph workspaces cannot be mocked during a syntax check. There is no separate signature available. Instead, the complete [database object](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") must be created. It might be defined in a different [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") and use other [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") objects. Hence, a special handling is needed, and implementation details from other classes must be used (transitive syntax check).

Definition and implementation of a graph workspace

The following code snippets are taken from the example [AMDP - Graph Processing](javascript:call_link\('abenamdp_graph_abexa.htm'\)).

Definition:

The method definition must include the addition [FOR DDL OBJECT](javascript:call_link\('abapclass-methods_for_ddl_object.htm'\)).

CLASS-METHODS graph\_workspace FOR DDL OBJECT
        OPTIONS CDS SESSION CLIENT REQUIRED.

Implementation:

The METHOD statement includes the addition BY DATABASE GRAPH WORKSPACE. Currently, only [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") are allowed after the addition USING. The declaration of the vertex table and edge table is included automatically. The declaration consists of the key column of a vertex table ([vertex key](javascript:call_link\('abenvertex_key_glosry.htm'\) "Glossary Entry")) and the key column of an edge table ([edge key](javascript:call_link\('abenedge_key_glosry.htm'\) "Glossary Entry")), as well as a source and a target column of an edge table. Currently, graph workspaces are restricted to one key column, and one source and destination column.

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

Graph Procedure   

[Graph procedures](javascript:call_link\('abengraph_procedure_glosry.htm'\) "Glossary Entry") are methods that refer to [graph workspaces](javascript:call_link\('abengraph_workspace_glosry.htm'\) "Glossary Entry") and operate on [graph](javascript:call_link\('abengraph_glosry.htm'\) "Glossary Entry") models. Graph procedures may have scalar input parameters and scalar or tabular output parameters. Inconsistencies in the underlying vertex and edge tables may result in runtime errors (CX\_AMDP\_EXECUTION\_FAILED), for example, if the edge source or target do not exist in the vertex table.

Definition and implementation of a graph procedure

The following code snippets are taken from the example [AMDP - Graph Processing](javascript:call_link\('abenamdp_graph_abexa.htm'\)).

Definition:

The example shows scalar-only importing parameters. The exporting parameters are both scalar and tabular.

CLASS-METHODS get\_shortest\_path
      AMDP OPTIONS CDS SESSION CLIENT current
      IMPORTING VALUE(im\_city\_from) TYPE demo\_cds\_spfli4graph-cityfrom
                VALUE(im\_city\_to)   TYPE demo\_cds\_spfli4graph-cityto
      EXPORTING VALUE(ex\_weight)    TYPE int8
                VALUE(ex\_route)     TYPE tt\_conn
      RAISING   cx\_amdp\_execution\_failed.

Implementation:

The METHOD statement includes the addition FOR HDB LANGUAGE GRAPH to denote that the implementation contains [GraphScript](javascript:call_link\('abengraphscript_glosry.htm'\) "Glossary Entry") code. The READ-ONLY addition is mandatory. The USING addition must be followed by a graph workspace.

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

Executable Example

The example [AMDP - Graph Processing](javascript:call_link\('abenamdp_graph_abexa.htm'\)) demonstrates graph processing using a graph workspace and a graph procedure.