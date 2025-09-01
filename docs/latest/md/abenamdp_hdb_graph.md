  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_methods.htm) →  [METHOD, BY DATABASE PROCEDURE, FUNCTION, GRAPH WORKSPACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Graph%20Processing%2C%20ABENAMDP_HDB_GRAPH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Graph Processing

[AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry") supports two [SAP HANA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_hana_glosry.htm "Glossary Entry") artifacts for processing [graphs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_glosry.htm "Glossary Entry"):

-   [Graph workspaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_workspace_glosry.htm "Glossary Entry")
-   [Graph procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_procedure_glosry.htm "Glossary Entry")

Graph workspaces can be consumed by [graph procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_procedure_glosry.htm "Glossary Entry") using [GraphScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraphscript_glosry.htm "Glossary Entry") which is the implementation language of an [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_methods.htm) that specifies the addition [FOR HDB LANGUAGE GRAPH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm) in the METHOD statement. In contrast to [AMDP procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry"), methods in this context operate on non-procedural database objects ([DDL objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_object_glosry.htm "Glossary Entry")).

Further Information

[SAP HANA Graph Reference](https://help.sap.com/docs/SAP_HANA_PLATFORM/f381aa9c4b99457fb3c6b53a2fd29c02/f7093581a9284c59a85122a7955749f4)

Graph Workspace   

Graph workspaces are created in [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") that declare a [vertex table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvertex_table_glosry.htm "Glossary Entry") and an [edge table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenedge_table_glosry.htm "Glossary Entry") as sources for a [graph](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_glosry.htm "Glossary Entry") model.

The declaration consists of the key column of a vertex table ([vertex key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvertex_key_glosry.htm "Glossary Entry")) and the key column of an edge table ([edge key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenedge_key_glosry.htm "Glossary Entry")), as well as a source and a target column of an edge table. Currently, graph workspaces are restricted to one key column, and one source and target column.

Note: Graph workspaces cannot be mocked during a syntax check. There is no separate signature available. Instead, the complete [database object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_object_glosry.htm "Glossary Entry") must be created. It might be defined in a different [AMDP class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry") and use other [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry") objects. Hence, a special handling is needed, and implementation details from other classes must be used (transitive syntax check).

Definition and implementation of a graph workspace

The following code snippets are taken from the example [AMDP - Graph Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_graph_abexa.htm).

Definition:

The method definition must include the addition [FOR DDL OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_for_ddl_object.htm).

CLASS-METHODS graph\_workspace FOR DDL OBJECT
        OPTIONS CDS SESSION CLIENT REQUIRED.

Implementation:

The METHOD statement includes the addition BY DATABASE GRAPH WORKSPACE. Currently, only [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") are allowed after the addition USING. The declaration of the vertex table and edge table is included automatically. The declaration consists of the key column of a vertex table ([vertex key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvertex_key_glosry.htm "Glossary Entry")) and the key column of an edge table ([edge key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenedge_key_glosry.htm "Glossary Entry")), as well as a source and a target column of an edge table. Currently, graph workspaces are restricted to one key column, and one source and destination column.

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

[Graph procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_procedure_glosry.htm "Glossary Entry") are methods that refer to [graph workspaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_workspace_glosry.htm "Glossary Entry") and operate on [graph](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_glosry.htm "Glossary Entry") models. Graph procedures may have scalar input parameters and scalar or tabular output parameters. Inconsistencies in the underlying vertex and edge tables may result in runtime errors (CX\_AMDP\_EXECUTION\_FAILED), for example, if the edge source or target do not exist in the vertex table.

Definition and implementation of a graph procedure

The following code snippets are taken from the example [AMDP - Graph Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_graph_abexa.htm).

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

The METHOD statement includes the addition FOR HDB LANGUAGE GRAPH to denote that the implementation contains [GraphScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraphscript_glosry.htm "Glossary Entry") code. The READ-ONLY addition is mandatory. The USING addition must be followed by a graph workspace.

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

The example [AMDP - Graph Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_graph_abexa.htm) demonstrates graph processing using a graph workspace and a graph procedure.