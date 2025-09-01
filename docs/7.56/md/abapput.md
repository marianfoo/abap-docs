  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_statements.htm) → 

PUT

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapput_shortref.htm)

Obsolete Syntax

PUT *{* node *|* <node> *}*.

Effect

This statement is only possible in the [database program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_program_glosry.htm "Glossary Entry") of a logical database in the subroutine named put\_node. In the runtime framework, it raises the event [GET node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget-.htm) and thereby signals that data is available in the [table work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_glosry.htm "Glossary Entry") of the node node. If there is an appropriate event block implemented in the [executable program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_glosry.htm "Glossary Entry") linked with the logical database, this block is executed.

After the associated event block has been processed, the subroutine put\_next\_node of the node next\_node that follows in the logical database structure is called, if this node is processed in the linked executable program. Once this subroutine is exited, the event GET node LATE is raised and, if implemented, its event block is processed in the executable program.

The database program must contain one of the statements [NODES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm) or [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables.htm) for the node node. The syntax of the statement PUT depends on the [node type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm).

-   If the node is type C, S, or T, the name of the node node must be specified after PUT.
-   If the node is type A, a field symbol <node> must be specified with the name of the node after PUT. In the statement PUT, the field symbol must be assigned a data object of the data type that is requested in the TYPE addition of the statement NODES in the linked executable program. This data type can be taken from the internal table dyn\_node\_types that is predefined in the database program.

Hints

-   If the logical database is not directly linked with an executable program, but is called using the function module LDB\_PROCESS instead, the statement PUT does not raise an event and ensures that the corresponding callback routine is called in the calling program instead.
-   See also [Database Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_program.htm).
-   If logical databases are no longer created, the statement PUT is no longer needed either.

Example

The subroutine put\_root\_node is part of the database program of a logical database with a node root\_node of type A, which is assigned the data types S\_CARR\_ID and S\_CONN\_ID from the ABAP Dictionary. Accordingly, a field symbol <root\_node> is specified after PUT, and its value is set depending on the content of the corresponding line of the internal table dyn\_node\_types.

FORM put\_root\_node.
  DATA carr     TYPE s\_carr\_id.
  DATA conn     TYPE s\_conn\_id.
  DATA dyn\_node LIKE LINE OF dyn\_node\_types.
  READ TABLE dyn\_node\_types INTO dyn\_node
                            WITH KEY node = 'ROOT\_NODE'.
  CASE dyn\_node-type.
    WHEN 'S\_CARR\_ID'.
      carr = ...
      ASSIGN carr TO <root\_node>.
    WHEN 'S\_CONN\_ID'.
      conn = ...
      ASSIGN conn TO <root\_node>.
    WHEN OTHERS.
      EXIT.
  ENDCASE.
  PUT <root\_node>.
ENDFORM.

The following lines can be part of an executable program that is linked with the logical database. The specification after TYPE in the statement NODES defines the type of the field symbol <root\_node> and writes the type to the column type in the corresponding line in the internal table dyn\_node\_types in the database program of the logical database.

NODES root\_node TYPE s\_carr\_id.
               "TYPE s\_conn\_id.
GET root\_node.
  ...