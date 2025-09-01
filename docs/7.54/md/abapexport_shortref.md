---
title: "EXPORT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm) Syntax EXPORT  p1 = dobj1 p2 = dobj2 ...  p1 FROM dobj1 p2 FROM dobj2 ...  (ptab)  TO   DATA BUFFER xstr    INTERNAL TABLE itab    MEMORY ID id
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_shortref.htm"
abapFile: "abapexport_shortref.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abapexport", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  E

EXPORT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm)

Syntax

EXPORT *{* *{*p1 = dobj1 p2 = dobj2 ...*}*
       *|* *{*p1 FROM dobj1 p2 FROM dobj2 ...*}*
       *|* (ptab) *}*
    TO *{* *{* DATA BUFFER xstr *}*
       *|* *{* INTERNAL TABLE itab *}*
       *|* *{* MEMORY ID id *}*
       *|* *{* DATABASE      dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id *}*
       *|* *{* SHARED MEMORY dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id *}*
       *|* *{* SHARED BUFFER dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id *}*  *}*
       *\[* COMPRESSION *{* ON *|* OFF *}* *\]*.

Effect

Saves data objects dobj1, dobj2, ... in a [data cluster](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_glosry.htm "Glossary Entry").

Additions

-   [*{*p1 = dobj1 p2 = dobj2 ...*}**|**{*p1 FROM dobj1 p2 FROM dobj2 ...*}**|*(ptab)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_param.htm)
    Defines the data cluster by specifying single parameters statically using p1 = dobj1 p2 = dobj2 ... or p1 FROM dobj1 p2 FROM dobj2 ... or by specifying them dynamically in an internal table ptab.
    
-   [DATA BUFFER xstr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm)
    Saves the data cluster as a byte string in xstr.
    
-   [INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm)
    Saves the data cluster in an internal table itab.
    
-   [MEMORY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm)
    Saves the data cluster in the [ABAP memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_memory_glosry.htm "Glossary Entry").
    
-   [DATABASE dbtab(ar) *\[*CLIENT cl*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm)
    Saves the data cluster in a database table dbtab in the area ar under the [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") cl.
    
-   [*{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* dbtab(ar) *\[*CLIENT cl*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm)
    Saves the data cluster in an application buffer in the [shared memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current [AS Instance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry") addressed using the name of a database table dbtab, an area ar, and a client ID cl. These two alternatives have different displacement mechanisms.
    
-   [ID id](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm)
    Specifies the ID of the data cluster in id.
    
-   [FROM wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm)
    Specifies a work area wa to save information about the data cluster.
    
-   [COMPRESSION *{* ON *|* OFF *}*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm)
    Specifies whether or not the data cluster is saved in compressed form.