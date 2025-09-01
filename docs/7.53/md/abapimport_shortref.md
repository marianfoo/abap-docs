---
title: "IMPORT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_data_cluster.htm) Syntax IMPORT  p1 = dobj1 p2 = dobj2 ...  p1 TO dobj1  p2 TO dobj2 ...  (ptab)  FROM   DATA BUFFER xstr    INTERNAL TABLE itab    MEMORY ID id
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_shortref.htm"
abapFile: "abapimport_shortref.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abapimport", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  I

IMPORT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_data_cluster.htm)

Syntax

IMPORT *{* *{*p1 = dobj1 p2 = dobj2 ...*}*
       *|* *{*p1 TO dobj1  p2 TO dobj2 ...*}*
       *|* (ptab) *}*
  FROM *{* *{* DATA BUFFER xstr *}*
       *|* *{* INTERNAL TABLE itab *}*
       *|* *{* MEMORY ID id *}*
       *|* *{* DATABASE      dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]*
                                   *{*ID id*}**|**{*MAJOR-ID id1 *\[*MINOR-ID id2*\]**}* *}*
       *|* *{* SHARED MEMORY dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id *}*
       *|* *{* SHARED BUFFER dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id *}* *}*
       *\[* *{* *{* *{* *{**\[*ACCEPTING PADDING*\]* *\[*ACCEPTING TRUNCATION*\]**}*
             *|*  *\[*IGNORING STRUCTURE BOUNDARIES*\]* *}*
             *\[* IGNORING CONVERSION ERRORS
               *\[*REPLACEMENT CHARACTER rc*\]* *\]* *}*
         *|* *\[*IN CHAR-TO-HEX MODE*\]* *}* *\]*
       *\[*CODE PAGE INTO cp*\]*
       *\[*ENDIAN INTO endian*\]*.

Effect

Imports a [data cluster](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry") into the data objects dobj1, dobj2, ...

Additions

-   [*{*p1 = dobj1 p2 = dobj2 ...*}**|**{*p1 TO dobj1 p2 TO dobj2 ...*}**|*(ptab)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_parameterlist.htm)
    Selects the data to be read by statically specifying individual parameters using p1 = dobj1 p2 = dobj2 ... or p1 TO dobj1 p2 TO dobj2 ... or by specifying them dynamically in an internal table ptab.
    
-   [DATA BUFFER xstr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_medium.htm)
    Specifies a data cluster stored as a byte sequence in xstr.
    
-   [INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_medium.htm)
    Specifies a data cluster stored in an internal table itab.
    
-   [MEMORY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_medium.htm)
    Specifies a data cluster stored in the [ABAP Memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_memory_glosry.htm "Glossary Entry").
    
-   [DATABASE dbtab(ar) *\[*CLIENT cl*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_medium.htm)
    Specifies a data cluster stored in a database table dbtab in the area ar with the [client ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_identifier_glosry.htm "Glossary Entry") cl.
    
-   [*{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* dbtab(ar) *\[*CLIENT cl*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_medium.htm)
    Specifies a data cluster stored in an application buffer in the [shared memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current [AS Instance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapplication_server_glosry.htm "Glossary Entry") addressed using the name of a database table dbtab, an area ar, and a client ID cl. These two alternatives have different displacement mechanisms.
    
-   [ID id](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_medium.htm)
    Specifies the identifier id of the [data cluster](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry").
    
-   [MAJOR-ID id1 *\[*MINOR-ID id2*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_obsolete_id.htm)
    Obsolete: Specifies the identification id of a data cluster in database tables using a pattern.
    
-   [TO wa](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_medium.htm)
    Specifies a work area wa for including details about the data cluster.
    
-   [ACCEPTING PADDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_conversion.htm)
    Enables data to be exported to longer target fields.
    
-   [ACCEPTING TRUNCATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_conversion.htm)
    Enables data to be exported to shorter target fields.
    
-   [IGNORING STRUCTURE BOUNDARIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_conversion.htm)
    Enables data to be exported to structures with different boundaries.
    
-   [IGNORING CONVERSION ERRORS *\[*REPLACEMENT CHARACTER rc*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_conversion.htm)
    Suppresses non-handleable exceptions when converting to the target [code page](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencodepage_glosry.htm "Glossary Entry"), where rc specifies a replacement character for characters that cannot be converted.
    
-   [IN CHAR-TO-HEX MODE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_conversion.htm)
    Enables character-like data to be exported to byte sequences.
    
-   [CODE PAGE INTO cp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_conversion.htm)
    Returns the code page for the data cluster in cp.
    
-   [ENDIAN INTO endian](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_conversion.htm)
    Returns the byte order of the data cluster in endian.