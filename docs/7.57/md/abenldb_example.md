  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Examples](javascript:call_link\('abenldb_examples.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LDB - Example of a Logical Database, ABENLDB_EXAMPLE, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

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