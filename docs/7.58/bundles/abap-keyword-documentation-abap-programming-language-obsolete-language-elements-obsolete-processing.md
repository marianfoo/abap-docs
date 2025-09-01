# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Processing of External Data / Logical Databases (LDB, Obsolete) / LDB - Examples

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenldb_examples.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_examples.htm)
- [abenldb_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_example.htm)
- [abenldb_selections_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_selections_example.htm)
- [abenldb_program_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_program_example.htm)
- [abenreport_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreport_abexa.htm)
- [abenlogical_database_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_abexa.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.967Z

---

### abenldb_examples.htm

> **📖 Official SAP Documentation**: [abenldb_examples.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_examples.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenldb_examples.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_examples.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Examples%2C%20ABENLDB_EXAMPLES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LDB - Examples

-   [Example of a logical database](javascript:call_link\('abenldb_example.htm'\))
-   [Example of selection include](javascript:call_link\('abenldb_selections_example.htm'\))
-   [Example of a database program](javascript:call_link\('abenldb_program_example.htm'\))
-   [Logical database, linked with a program](javascript:call_link\('abenreport_abexa.htm'\))
-   [Logical database, called by function module](javascript:call_link\('abenlogical_database_abexa.htm'\))

Continue
[LDB - Example of a Logical Database](javascript:call_link\('abenldb_example.htm'\))
[LDB - Example of a Selection Include](javascript:call_link\('abenldb_selections_example.htm'\))
[LDB - Example of a Database Program](javascript:call_link\('abenldb_program_example.htm'\))
![Example](exa.gif "Example") [LDB - Linkage with a Program](javascript:call_link\('abenreport_abexa.htm'\))
![Example](exa.gif "Example") [LDB - Calls Using a Function Module](javascript:call_link\('abenlogical_database_abexa.htm'\))



**📖 Source**: [abenldb_examples.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_examples.htm)

### abenldb_example.htm

> **📖 Official SAP Documentation**: [abenldb_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_example.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenldb_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_example.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Examples](javascript:call_link\('abenldb_examples.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Example%20of%20a%20Logical%20Database%2C%20ABENLDB_EXAMPLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LDB - Example of a Logical Database

This example demonstrates all significant components of the imaginary logical database TEST\_LDB.

-   [Structure](#abenldb-example-1-------selections-in-the-selection-include---@ITOC@@ABENLDB_EXAMPLE_2)
-   [Database Program](#abenldb-example-3---structure-----lfa1------------lfb1--------------------------lfc1--------------------------bkpf--selections-in-the-selection-include-----select-options--slifnr---for-lfa1-lifnr------------------sbukrs---for-lfb1-bukrs------------------sgjahr---for-lfc1-gjahr------------------sbelnr---for-bkpf-belnr---database-program--------------------------------------------------------------------database-program-of-logical-database-test--ldb-------------------------------------------------------------program-sapdbtest--ldb-defining-database-test--ldb--nodes--lfa1---------lfb1---------lfc1---------bkpf-----------------------------------------------------------------initialize-selection-screen--processed-before-pbo--------------------------------------------------------------form-init-------endform-----------------------------------------------------------------pbo-of-selection-screen-------------------------------------------------------------form-pbo-------endform-----------------------------------------------------------------pai-of-selection-screen-------------------------------------------------------------form-pai-using-fname-mark----case-fname------when--slifnr-----------------when--sbukrs-----------------when--sgjahr-----------------when--sbelnr---------------endcase--endform-----------------------------------------------------------------raise-event-get-lfa1-------------------------------------------------------------form-put--lfa1----select----from-lfa1------------where-lifnr-in-slifnr INTO @lfa1.
    PUT lfa1.
  ENDSELECT.
ENDFORM.
\*-------------------------------------------------------\*
\* Raise event GET lfb1
\*-------------------------------------------------------\*
FORM put\_lfb1.
  SELECT \* FROM lfb1
           WHERE lifnr = @lfa1-lifnr
             AND bukrs IN @sbulrs
           INTO @lfb1.
    PUT lfb1.
  ENDSELECT.
ENDFORM.
\*-------------------------------------------------------\*
\* Raise event GET lfc1
\*-------------------------------------------------------\*
FORM put\_lfc1.
  SELECT \* FROM lfc1
           WHERE lifnr = @lfa1-lifnr
             AND bukrs      =  @lfb1-bukrs
             AND gjahr      IN @sgjahr
           INTO lfc1.
    PUT lfc1.
  ENDSELECT.
ENDFORM.
\*-------------------------------------------------------\*
\* Raise event GET bkpf
\*-------------------------------------------------------\*
FORM put\_bkpf.
  SELECT \* FROM bkpf
           WHERE bukrs      =  @lfb1-bukrs
             AND belnr      IN @sbelnr
             AND gjahr      IN @sgjahr
           INTO @bkpf.
    PUT bkpf.
  ENDSELECT.
ENDFORM.

The PROGRAM statement has the addition [DEFINING DATABASE test\_ldb](javascript:call_link\('abapreport_defining.htm'\)). This defines the link of the database program with the logical database TEST\_LDB.

The nodes of the structure are declared using the [NODES statement](javascript:call_link\('abapnodes.htm'\)). This creates the required interface work areas as table work areas. The statement [TABLES](javascript:call_link\('abaptables.htm'\)) can be used as a node in the same way for database tables. If the nodes are not database tables, they must be declared using NODES. The interface work areas are shared by the database program and a linked executable program or the function module LDB\_PROCESS and therefore become the interface used for passing data.

The selection screen can be initialized in the subroutines init and pbo.

The user input on the selection screen can be, for example, checked for authorizations in the subroutine pai. Other checks, such as plausibility or value range checks, are also possible here. If a check is negative, an error dialog can be programmed and the corresponding field can be initialized again.

The database tables are read in accordance with the selection criteria of the user and the associated GET events are raised in the subroutines put\_....

This program is only intended to demonstrate the principles of the structure of a logical database. It does not contain any methods for optimizing response times. The chronological order of the subroutine calls is determined by the structure of the logical database.



**📖 Source**: [abenldb_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_example.htm)

### abenldb_selections_example.htm

> **📖 Official SAP Documentation**: [abenldb_selections_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_selections_example.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenldb_selections_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_selections_example.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Examples](javascript:call_link\('abenldb_examples.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Example%20of%20a%20Selection%20Include%2C%20ABENLDB_SELECTIONS_EXAMPLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

LDB - Example of a Selection Include

A logical database TEST\_LDB has the structure shown in [Example of a Logical Database](javascript:call_link\('abenldb_example.htm'\)). The generated proposal for the selection include is then as follows:

\*-----------------------------------------------------------\*
\* Include DBTEST\_LDBSEL
\* It will be automatically included into the database program
\*-----------------------------------------------------------\*
\* If the source is automatically generated,
\* perform the following steps:
\* 1. Replace ? by suitable names (at most 8 characters).
\* 2. Activate SELECT-OPTIONS and PARAMETERS (delete stars).
\* 3. Save source code.
\* 4. Edit database program.
\*
\* Hint : Syntax check is not possible within this include!
\* It will be checked during syntax check of database program.
\*-----------------------------------------------------------\*
\* SELECT-OPTIONS :  ?  FOR LFA1-LIFNR.
\* Parameter for search pattern selection:
\* PARAMETERS p\_sp AS SEARCH PATTERN FOR TABLE LFA1.
\* SELECT-OPTIONS :
\*                   ?  FOR LFB1-LIFNR,
\*                   ?  FOR LFB1-BUKRS.
\* SELECT-OPTIONS :
\*                   ?  FOR LFC1-LIFNR,
\*                   ?  FOR LFC1-BUKRS,
\*                   ?  FOR LFC1-GJAHR.
\* SELECT-OPTIONS :
\*                   ?  FOR BKPF-BUKRS,
\*                   ?  FOR BKPF-BELNR,
\*                   ?  FOR BKPF-GJAHR.
\* Enable DYNAMIC SELECTIONS for selected nodes :
\* Enable FIELD SELECTION for selected nodes :

If the nodes LFA1 and LFB1 are defined for dynamic selections and the node LFC1 defined for field selections, the following additional program lines are generated:

SELECTION-SCREEN DYNAMIC SELECTIONS FOR TABLE LFA1.
SELECTION-SCREEN DYNAMIC SELECTIONS FOR TABLE LFB1.
SELECTION-SCREEN FIELD SELECTION FOR TABLE LFC1.

This automatically created selection include can be completed, for example, as follows:

\* Selection criteria:
  SELECT-OPTIONS slifnr  FOR lfa1-lifnr.
  SELECT-OPTIONS sbukrs  FOR lfb1-bukrs.
  SELECT-OPTIONS sgjahr  FOR flc1-gjahr.
  SELECT-OPTIONS sbelnr  FOR bkpf-belnr.
\* User-defined parameters:
  PARAMETERS pstida LIKE sy-datum FOR NODE bkpf.
\* Dynamic selections for LFA1 and LFB1:
  SELECTION-SCREEN DYNAMIC SELECTIONS FOR NODE: lfa1, lfb1.
\* Field selection for LFB1 and LFC1:
  SELECTION-SCREEN FIELD SELECTION FOR NODE: lfb1, lfc1.

A selection is made from the available selection criteria and is given a name. The additional parameter pstida is declared and connected to the node BKPF. Dynamic selections are defined for the tablesLFA1 and LFB1. The tables LFB1 and LFC1 are defined for field selections.



**📖 Source**: [abenldb_selections_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_selections_example.htm)

### abenldb_program_example.htm

> **📖 Official SAP Documentation**: [abenldb_program_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_program_example.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenldb_program_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_program_example.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Examples](javascript:call_link\('abenldb_examples.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Example%20of%20a%20Database%20Program%2C%20ABENLDB_PROGRAM_EXAMPLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

LDB - Example of a Database Program

A logical database TEST\_LDB has the structure shown in [Example of a Logical Database](javascript:call_link\('abenldb_example.htm'\)). All nodes are database tables. Selections are defined in the selection include:

SELECT-OPTIONS SLIFNR  FOR LFA1-LIFNR.
SELECT-OPTIONS SBUKRS  FOR LFB1-BUKRS.
SELECT-OPTIONS SGJAHR  FOR LFC1-GJAHR.
SELECT-OPTIONS SBELNR  FOR BKPF-BELNR.

The generated proposal for the database program is then as follows:

Master Program SAPDBTEST\_LDB

\*----------------------------------------------------------\*
\*      DATABASE PROGRAM OF LOGICAL DATABASE TEST\_LDB
\*----------------------------------------------------------\*
INCLUDE DBTEST\_LDBTOP.     " header
INCLUDE DBTEST\_LDBXXX.     " all system routines
\* INCLUDE DBTEST\_LDBF001.  " user defined include

Include Program DBTEST\_LDBTOP

PROGRAM SAPDBTEST\_LDB DEFINING DATABASE TEST\_LDB.
TABLES: LFA1,
         LFB1,
         LFC1,
         BKPF.
\* DATA: ...          "user defined variables

Include Program DBTEST\_LDB001

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
ENDFORM.                               "PUT\_LFA1
\*----------------------------------------------------------\*
\* Authority Check for node LFA1
\*----------------------------------------------------------\*
\* FORM AUTHORITY\_CHECK\_LFA1.
\*   AUTHORITY-CHECK ...
\* ENDFORM.

Include Programs DBTEST\_LDB002 and DBTEST\_LDB003

Like DBTEST\_LDB001 for the nodes LFB1 and LFC1

Include Program DBTEST\_LDB004

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
ENDFORM.                               "PUT\_BKPF
\*----------------------------------------------------------\*
\* Authority Check for node BKPF
\*----------------------------------------------------------\*
\* FORM AUTHORITYCHECK\_BKPF.
\*   AUTHORITY-CHECK ...
\* ENDFORM.                             "AUTHORITY\_CHECK\_BKPF

Include Program DBTEST\_LDBFXXX

\*----------------------------------------------------------\*
\* BEFORE\_EVENT will be called before event EVENT
\* Possible values for EVENT: 'START-OF-SELECTION'
\*----------------------------------------------------------\*
\* FORM BEFORE\_EVENT USING EVENT.
\*   CASE EVENT.
\*     WHEN 'START-OF-SELECTION'
\*
\*   ENDCASE.
\* ENDFORM.                             "BEFORE\_EVENT
\*----------------------------------------------------------\*
\* AFTER\_EVENT will be called after event EVENT
\* Possible values for EVENT: 'END-OF-SELECTION'
\*----------------------------------------------------------\*
\* FORM AFTER\_EVENT USING EVENT.
\*   CASE EVENT.
\*     WHEN 'END-OF-SELECTION'
\*
\*   ENDCASE.
\* ENDFORM.                             "AFTER\_EVENT
\*-----------------------------------------------------------\*
\* Initialize global data for multiple processing of
\* one logical database.
\* Set returncode:
\*      0 -> all data are initialized, multiple processing o.k.
\*  other -> no multiple processing allowed
\*------------------------------------------------------------\*
FORM  LDB\_PROCESS\_INIT CHANGING SUBRC LIKE SY-SUBRC.
ENDFORM.                    "LDB\_PROCESS\_INIT
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
ENDFORM.                               "INIT.
\*----------------------------------------------------------\*
\* PBO of selection screen (processed always after ENTER)
\*----------------------------------------------------------\*
FORM PBO.
ENDFORM.                               "PBO.
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
ENDFORM.                               "PAI

Include Program DBTEST\_LDBSXXX

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
\* ENDFORM.                             "PUT\_EXAMPLE\_SP

The comment characters in front of ABAP statements that are to be used in addition to the mandatory statements can be deleted and the question marks can be replaced by appropriate expressions. The syntax check checks all include programs that match the naming conventions and also the selection include.

When the database is accessed in the subroutines put\_node, SELECT statements with conditions for the primary key fields in the WHERE clauses are generated. The performance of these statements is, however, not yet optimized. In particular, the subroutines put\_node of a subtree of the structure represent nested SELECT loops, which should generally be avoided. Instead, the data read can be buffered in internal tables, for example, and passed from here to the application program using the PUT statement. The statement PUT node, however, should always be in a subroutine whose name starts with put\_node for technical reasons.

If the selections specify [dynamic selections](javascript:call_link\('abenldb_free_selections.htm'\)) or [field selections](javascript:call_link\('abenldb_field_selections.htm'\)) for a node, corresponding statements are generated in the subroutine put\_node and the SELECT statement created automatically is modified, as shown in the example for the node BKPF.

The subroutines before\_event, after\_event, and put\_ldb\_sp are created as a comment in the database program and can be modified and activated by deleting the asterisks. before\_event is called before the event specified in the parameter event is processed. after\_event is called after the event specified in the parameter event is processed. When a search help selection is made, put\_ldb\_sp is called to process the return values instead of put\_node for the root node.



**📖 Source**: [abenldb_program_example.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_program_example.htm)

### abenreport_abexa.htm

> **📖 Official SAP Documentation**: [abenreport_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreport_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenreport_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreport_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Examples](javascript:call_link\('abenldb_examples.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Linkage%20with%20a%20Program%2C%20ABENREPORT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LDB - Linkage with a Program

This example demonstrates how a logical database is linked with an executable program.

Source Code   

REPORT demo\_report.
NODES: spfli, sflight, sbook.
DATA: weight       TYPE p LENGTH 8 DECIMALS 4,
      total\_weight TYPE p LENGTH 8 DECIMALS 4.
INITIALIZATION.
  carrid-sign = 'I'.
  carrid-option = 'EQ'.
  carrid-low = 'AA'.
  carrid-high = 'LH'.
  APPEND carrid TO carrid.
START-OF-SELECTION.
  WRITE 'Luggage weight of flights'.
GET spfli FIELDS carrid connid cityfrom cityto.
  SKIP.
  ULINE.
  WRITE: / 'Carrid:', spfli-carrid,
           'Connid:', spfli-connid,
         / 'From:  ', spfli-cityfrom,
           'To:    ', spfli-cityto.
  ULINE.
GET sflight FIELDS fldate.
  SKIP.
  WRITE: / 'Date:', sflight-fldate.
GET sbook FIELDS luggweight.
  weight += sbook-luggweight.
GET sflight LATE FIELDS carrid .
  WRITE: / 'Luggage weight =', weight.
  total\_weight += weight.
  weight = 0.
END-OF-SELECTION.
  ULINE.
  WRITE: / 'Sum of luggage weights =', total\_weight.

Description   

This example shows a typical report where the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") F1S is assigned to its properties.



**📖 Source**: [abenreport_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreport_abexa.htm)

### abenlogical_database_abexa.htm

> **📖 Official SAP Documentation**: [abenlogical_database_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenlogical_database_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenlogical_database_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Examples](javascript:call_link\('abenldb_examples.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Calls%20Using%20a%20Function%20Module%2C%20ABENLOGICAL_DATABASE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

LDB - Calls Using a Function Module

This example demonstrates calling a logical database using the function module LDB\_PROCESS.

Source Code   

REPORT demo\_logical\_database.
DATA wa\_spfli TYPE spfli.
SELECTION-SCREEN BEGIN OF SCREEN 1100.
SELECT-OPTIONS s\_carr FOR wa\_spfli-carrid.
SELECTION-SCREEN END OF SCREEN 1100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA callback    TYPE TABLE OF ldbcb.
    DATA: seltab    TYPE TABLE OF rsparams,
          seltab\_wa LIKE LINE OF seltab,
          scarr\_wa  LIKE LINE OF s\_carr.
    CALL SELECTION-SCREEN 1100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    callback = VALUE #( ( ldbnode     = 'SPFLI'
                          get         = 'X'
                          get\_late    = 'X'
                          cb\_prog     = sy-repid
                          cb\_form     = 'CALLBACK\_SPFLI' )
                        ( ldbnode     = 'SFLIGHT'
                          get         = 'X'
                          cb\_prog     = sy-repid
                          cb\_form     = 'CALLBACK\_SFLIGHT' ) ).
    seltab\_wa-kind = 'S'.
    seltab\_wa-selname = 'CARRID'.
    LOOP AT s\_carr INTO scarr\_wa.
      MOVE-CORRESPONDING scarr\_wa TO seltab\_wa.
      APPEND seltab\_wa TO seltab.
    ENDLOOP.
    CALL FUNCTION 'LDB\_PROCESS'
      EXPORTING
        ldbname                     = 'F1S'
        variant                     = ' '
      TABLES
        callback                    = callback
        selections                  = seltab
      EXCEPTIONS
        OTHERS                      = 4.
    IF sy-subrc <> 0.
      WRITE: 'Exception with SY-SUBRC', sy-subrc.
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).
FORM callback\_spfli USING name  TYPE ldbn-ldbnode
                          wa    TYPE spfli
                          evt   TYPE c
                          check TYPE c.
  CASE evt.
    WHEN 'G'.
      WRITE: / wa-carrid, wa-connid, wa-cityfrom, wa-cityto.
      ULINE.
    WHEN 'L'.
      ULINE.
  ENDCASE.
ENDFORM.
FORM callback\_sflight USING name  TYPE ldbn-ldbnode
                            wa    TYPE sflight
                            evt   TYPE c
                            check TYPE c.
  WRITE: / wa-fldate, wa-seatsocc, wa-seatsmax.
ENDFORM.

Description   

The program reads data using the logical database F1S. First a program-specific selection screen is defined. The data object wa\_spfli is only required here. Next, suitable variables for the interface are declared.

The internal table callback is filled in such a way that, for the two nodes SPFLI and SFLIGHT, different callback routines in the calling program are called. For the node SPFLI, the corresponding routine for GET and GET LATE is only to be called for GET in the case of SFLIGHT.

The internal table seltab is filled with values from the selection table s\_carr of the standalone selection screen 1100 for the selections of node SPFLI.

The function module LDB\_PROCESS is called with these parameters.

The subroutines callback\_spfli and callback\_sflight are used as callback routines. Since the interface parameter wa is completely typed, the individual components of the work area can be accessed. In callback\_spfli, the events GET and GET LATE are handled differently.
