  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

IMPORT - Quick reference

[Reference](javascript:call_link\('abapimport_data_cluster.htm'\))

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

Imports a [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") into the data objects dobj1, dobj2, ...

Additions

-   [*{*p1 = dobj1 p2 = dobj2 ...*}**|**{*p1 TO dobj1 p2 TO dobj2 ...*}**|*(ptab)](javascript:call_link\('abapimport_parameterlist.htm'\))
    Selects the data to be read by statically specifying individual parameters using p1 = dobj1 p2 = dobj2 ... or p1 TO dobj1 p2 TO dobj2 ... or by specifying them dynamically in an internal table ptab.
    
-   [DATA BUFFER xstr](javascript:call_link\('abapimport_medium.htm'\))
    Specifies a data cluster stored as a byte sequence in xstr.
    
-   [INTERNAL TABLE itab](javascript:call_link\('abapimport_medium.htm'\))
    Specifies a data cluster stored in an internal table itab.
    
-   [MEMORY](javascript:call_link\('abapimport_medium.htm'\))
    Specifies a data cluster stored in the [ABAP Memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry").
    
-   [DATABASE dbtab(ar) *\[*CLIENT cl*\]*](javascript:call_link\('abapimport_medium.htm'\))
    Specifies a data cluster stored in a database table dbtab in the area ar with the [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") cl.
    
-   [*{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* dbtab(ar) *\[*CLIENT cl*\]*](javascript:call_link\('abapimport_medium.htm'\))
    Specifies a data cluster stored in the application buffer of the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of the [application server](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") and which is addressed by the name of a database table dbtab, an area ar, and a client ID cl. These two alternatives have different displacement mechanisms.
    
-   [ID id](javascript:call_link\('abapimport_medium.htm'\))
    Specifies the identifier id of the [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry").
    
-   [MAJOR-ID id1 *\[*MINOR-ID id2*\]*](javascript:call_link\('abapimport_obsolete_id.htm'\))
    Obsolete: Specifies the identification id of a data cluster in database tables using a pattern.
    
-   [TO wa](javascript:call_link\('abapimport_medium.htm'\))
    Specifies a work area wa for including details about the data cluster.
    
-   [ACCEPTING PADDING](javascript:call_link\('abapimport_conversion.htm'\))
    Enables data to be exported to longer target fields.
    
-   [ACCEPTING TRUNCATION](javascript:call_link\('abapimport_conversion.htm'\))
    Enables data to be exported to shorter target fields.
    
-   [IGNORING STRUCTURE BOUNDARIES](javascript:call_link\('abapimport_conversion.htm'\))
    Enables data to be exported to structures with different boundaries.
    
-   [IGNORING CONVERSION ERRORS *\[*REPLACEMENT CHARACTER rc*\]*](javascript:call_link\('abapimport_conversion.htm'\))
    Suppresses non-handleable exceptions when converting to the target [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry"), where rc specifies a replacement character for characters that cannot be converted.
    
-   [IN CHAR-TO-HEX MODE](javascript:call_link\('abapimport_conversion.htm'\))
    Enables character-like data to be exported to byte sequences.
    
-   [CODE PAGE INTO cp](javascript:call_link\('abapimport_conversion.htm'\))
    Returns the code page for the data cluster in cp.
    
-   [ENDIAN INTO endian](javascript:call_link\('abapimport_conversion.htm'\))
    Returns the byte order of the data cluster in endian.