  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb.htm) →  [Logical Databases - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_examples.htm) → 

Example of a Database Program

A logical database TEST\_LDB has the structure shown in [Example of a Logical Database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_example.htm). All nodes are database tables. Selections are defined in the selection include:

SELECT-OPTIONS SLIFNR  FOR LFA1-LIFNR.
SELECT-OPTIONS SBUKRS  FOR LFB1-BUKRS.
SELECT-OPTIONS SGJAHR  FOR LFC1-GJAHR.
SELECT-OPTIONS SBELNR  FOR BKPF-BELNR.

The generated proposal for the database program is then as follows:

Master program SAPDBTEST\_LDB

\*----------------------------------------------------------\*
\*      DATABASE PROGRAM OF LOGICAL DATABASE TEST\_LDB
\*----------------------------------------------------------\*
INCLUDE DBTEST\_LDBTOP .    " header
INCLUDE DBTEST\_LDBXXX .    " all system routines
\* INCLUDE DBTEST\_LDBF001 . " user defined include

Include program DBTEST\_LDBTOP

PROGRAM SAPDBTEST\_LDB DEFINING DATABASE TEST\_LDB.
TABLES: LFA1,
         LFB1,
         LFC1,
         BKPF.
\* DATA: ...          "user defined variables

Include program DBTEST\_LDB001

\*----------------------------------------------------------\*
\* Call event GET LFA1
\*----------------------------------------------------------\*
FORM PUT\_LFA1.
\* SELECT \* FROM LFA1
\*   INTO LFA1
\*   INTO TABLE ? (choose one!)
\*   WHERE LIFNR = ?.
    PUT LFA1.
\* ENDSELECT.
ENDFORM.                               "PUT\_LFA1
\*----------------------------------------------------------\*
\* Authority Check for node LFA1
\*----------------------------------------------------------\*
\* FORM AUTHORITY\_CHECK\_LFA1.
\*   AUTHORITY-CHECK ...
\* ENDFORM.

Include programs DBTEST\_LDB002 and DBTEST\_LDB003

Like DBTEST\_LDB001 for the nodes LFB1 and LFC1

Include program DBTEST\_LDB004

\*----------------------------------------------------------\*
\* Call event GET BKPF
\*----------------------------------------------------------\*
FORM PUT\_BKPF.
\* STATICS FLAG.
\* IF FLAG = SPACE.
\*   FLAG = 'X'.
\*\*\* Declarations for field selection for node BKPF \*\*\*
\*   STATICS BKPF\_FIELDS TYPE RSFS\_TAB\_FIELDS.
\*   MOVE 'BKPF' TO BKPF\_FIELDS-TABLENAME.
\*   READ TABLE SELECT\_FIELDS WITH KEY BKPF\_FIELDS-TABLENAME
\*     INTO BKPF\_FIELDS.
\* ENDIF.
\* SELECT (BKPF\_FIELDS-FIELDS) INTO CORRESPONDING FIELDS OF
\*     BKPF / TABLE ? " (choose one of them)
\*     FROM BKPF
\*   WHERE BUKRS = LFB1-BUKRS
\*     AND BELNR IN SBELNR
\*     AND GJAHR = ?.
    PUT BKPF.
ENDFORM.                               "PUT\_BKPF
\*----------------------------------------------------------\*
\* Authority Check for node BKPF
\*----------------------------------------------------------\*
\* FORM AUTHORITYCHECK\_BKPF.
\*   AUTHORITY-CHECK ...
\* ENDFORM.                             "AUTHORITY\_CHECK\_BKPF

Include program DBTEST\_LDBFXXX

\*----------------------------------------------------------\*
\* BEFORE\_EVENT will be called before event EVENT
\* Possible values for EVENT: 'START-OF-SELECTION'
\*----------------------------------------------------------\*
\* FORM BEFORE\_EVENT USING EVENT.
\*   CASE EVENT.
\*     WHEN 'START-OF-SELECTION'
\*
\*   ENDCASE.
\* ENDFORM.                             "BEFORE\_EVENT
\*----------------------------------------------------------\*
\* AFTER\_EVENT will be called after event EVENT
\* Possible values for EVENT: 'END-OF-SELECTION'
\*----------------------------------------------------------\*
\* FORM AFTER\_EVENT USING EVENT.
\*   CASE EVENT.
\*     WHEN 'END-OF-SELECTION'
\*
\*   ENDCASE.
\* ENDFORM.                             "AFTER\_EVENT
\*-----------------------------------------------------------\*
\* Initialize global data for multiple processing of
\* one logical database.
\* Set returncode:
\*      0 -> all data are initialized, multiple processing o.k.
\*  other -> no multiple processing allowed
\*------------------------------------------------------------\*
FORM  LDB\_PROCESS\_INIT CHANGING SUBRC LIKE SY-SUBRC.
ENDFORM.                    "LDB\_PROCESS\_INIT
\*------------------------------------------------------------\*
\* LDB\_PROCESS\_CHECK\_SELECTIONS is called
\* after select-options and parameters are filled
\*------------------------------------------------------------\*
FORM  LDB\_PROCESS\_CHECK\_SELECTIONS CHANGING SUBRC LIKE SY-SUBRC
                                            MSG LIKE SYMSG.
ENDFORM.                    "LDB\_PROCESS\_CHECK\_SELECTIONS
\*----------------------------------------------------------\*
\* Initialize selection screen (processed before PBO)
\*----------------------------------------------------------\*
FORM INIT.
ENDFORM.                               "INIT.
\*----------------------------------------------------------\*
\* PBO of selection screen (processed always after ENTER)
\*----------------------------------------------------------\*
FORM PBO.
ENDFORM.                               "PBO.
\*----------------------------------------------------------\*
\* PAI of selection screen (processed always after ENTER)
\*----------------------------------------------------------\*
FORM PAI USING FNAME MARK.
\* CASE FNAME.
\*   WHEN 'SLIFNR  '.
\*   WHEN 'SBUKRS  '.
\*   WHEN 'SBELNR  '.
\*   WHEN 'SGJAHR  '.
\*   WHEN '\*'.
\*   ENDCASE.
ENDFORM.                               "PAI

Include program DBTEST\_LDBSXXX

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* !!! PLEASE DO NOT CHANGE MANUALLY (BEGIN OF BLOCK) !!!!!! \*
\*-----------------------------------------------------------\*
\* Data structures for search pattern selection
\*
\* !!! PLEASE DO NOT CHANGE MANUALLY (END OF BLOCK) !!!!!!!! \*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*-----------------------------------------------------------\*
\* PUT\_TEST\_LDB\_SP.
\* Processed when search pattern selection is used,
\* i.e. user input into PARAMETERS p\_sp AS SEARCH PATTERN
\* STRUCTURE.
\*-----------------------------------------------------------\*
\* FORM PUT\_TEST\_LDB\_SP.
\* ENDFORM.                             "PUT\_EXAMPLE\_SP

The comment characters before ABAP statements used in addition to the mandatory statements can be deleted and the question marks can be replaced by appropriate expressions. The syntax check checks all include programs that match the naming conventions and also the selection include.

When the database is accessed in the subroutines put\_node, SELECT statements with conditions for the primary key fields in the WHERE clauses are generated. The performance of these statements is, however, not yet optimized. In particular, the subroutines put\_node of a subtree of the structure represent nested SELECT loops, which should generally be avoided. Instead, the data read can be buffered in internal tables, for example, and passed from here to the application program using the PUT statement. The statement PUT node, though, should always be located in a subroutine whose name starts with put\_node for technical reasons.

If the selections specify [dynamic selections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_free_selections.htm) or [field selections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_field_selections.htm) for a node, corresponding statements are generated in the subroutine put\_node and the SELECT statement created automatically is modified, as seen in the example for the node BKPF.

The subroutines before\_event, after\_event, and put\_ldb\_sp are created as a comment in the database program and can be modified and (by deleting the asterisks) activated. before\_event is called before the event specified in the parameter event is processed. after\_event is called after the event specified in the parameter event is processed. When a search help selection is made, put\_ldb\_sp is called to edit the return values instead of put\_node for the root node.