---
title: "LDB - Example of a Selection Include"
description: |
  A logical database TEST_LDB has the structure shown in Example of a Logical Database(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_example.htm). The generated proposal for the selection include is then as follows: -------------------------------------------------------
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_selections_example.htm"
abapFile: "abenldb_selections_example.htm"
keywords: ["select", "delete", "do", "if", "data", "abenldb", "selections", "example"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb.htm) →  [LDB - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_examples.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Example%20of%20a%20Selection%20Include%2C%20ABENLDB_SELECTIONS_EXAMPLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

LDB - Example of a Selection Include

A logical database TEST\_LDB has the structure shown in [Example of a Logical Database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_example.htm). The generated proposal for the selection include is then as follows:

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