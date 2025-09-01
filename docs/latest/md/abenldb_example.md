  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Examples](javascript:call_link\('abenldb_examples.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Example%20of%20a%20Logical%20Database%2C%20ABENLDB_EXAMPLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LDB - Example of a Logical Database

This example demonstrates all significant components of the imaginary logical database TEST\_LDB.

-   [Structure](#@@ITOC@@ABENLDB_EXAMPLE_1)
-   [Selections in the Selection Include](#@@ITOC@@ABENLDB_EXAMPLE_2)
-   [Database Program](#@@ITOC@@ABENLDB_EXAMPLE_3)

Structure   

LFA1
  |
  |----LFB1
         |
         |----LFC1
         |
         |----BKPF

Selections in the Selection Include   

SELECT-OPTIONS: slifnr   FOR lfa1-lifnr,
                sbukrs   FOR lfb1-bukrs,
                sgjahr   FOR lfc1-gjahr,
                sbelnr   FOR bkpf-belnr.

Database Program   

\*-------------------------------------------------------\*
\* DATABASE PROGRAM OF LOGICAL DATABASE TEST\_LDB
\*-------------------------------------------------------\*
PROGRAM sapdbtest\_ldb DEFINING DATABASE test\_ldb.
NODES: lfa1,
       lfb1,
       lfc1,
       bkpf.
\*-------------------------------------------------------\*
\* Initialize selection screen (processed before PBO)
\*-------------------------------------------------------\*
FORM init.
....
ENDFORM.
\*-------------------------------------------------------\*
\* PBO of selection screen
\*-------------------------------------------------------\*
FORM pbo.
....
ENDFORM.
\*-------------------------------------------------------\*
\* PAI of selection screen
\*-------------------------------------------------------\*
FORM pai USING fname mark.
  CASE fname.
    WHEN 'SLIFNR'.
     ....
    WHEN 'SBUKRS'.
     ....
    WHEN 'SGJAHR'.
     ....
    WHEN 'SBELNR'.
     ....
  ENDCASE.
ENDFORM.
\*-------------------------------------------------------\*
\* Raise event GET lfa1
\*-------------------------------------------------------\*
FORM put\_lfa1.
  SELECT \* FROM lfa1
           WHERE lifnr IN @slifnr INTO @lfa1.
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