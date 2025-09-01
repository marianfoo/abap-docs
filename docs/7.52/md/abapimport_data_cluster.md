  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Clusters](javascript:call_link\('abendata_cluster.htm'\)) → 

IMPORT

[Quick Reference](javascript:call_link\('abapimport_shortref.htm'\))

Syntax

IMPORT [parameter\_list](javascript:call_link\('abapimport_parameterlist.htm'\)) FROM [medium](javascript:call_link\('abapimport_medium.htm'\)) *\[*[conversion\_options](javascript:call_link\('abapimport_conversion.htm'\))*\]*.

Effect

Imports data objects specified in [parameter\_list](javascript:call_link\('abapimport_parameterlist.htm'\)) from a [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") stored in storage medium [medium](javascript:call_link\('abapimport_medium.htm'\)) with statement [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)). If necessary, the data is automatically converted to the current byte order (endian) and character format. Use additions [conversion\_options](javascript:call_link\('abapimport_conversion.htm'\)) to make adaptations to the current platform. System Fields

System Fields

sy-subrc

Meaning

0

The specified data cluster was found and the content of the parameters in the data cluster was passed to the respective data objects. Unavailable parameters are ignored.

4

The specified data cluster was not found.

Note

See also [Classes for Data Clusters](javascript:call_link\('abencl_abap_expimp.htm'\)).

Example

Reads a link table of the ABAP keyword documentation that is buffered in a data cluster of a database table to an internal table.

DATA:
  abapdocu\_temp\_id TYPE abapdocu\_temp-srtfd,
  abapdocu\_temp\_wa TYPE abapdocu\_temp,
  index\_tab        TYPE cl\_abap\_docu=>abap\_index\_tab.
abapdocu\_temp\_id =  'MAN\_INDEX.' && sy-langu.
IMPORT man\_index\_tab = index\_tab
       FROM DATABASE abapdocu\_temp(mx)
       ID   abapdocu\_temp\_id
       TO   abapdocu\_temp\_wa.
IF sy-subrc = 0.
  ...
ENDIF.

Continue
[IMPORT - parameter\_list](javascript:call_link\('abapimport_parameterlist.htm'\))
[IMPORT - medium](javascript:call_link\('abapimport_medium.htm'\))
[IMPORT - conversion\_options](javascript:call_link\('abapimport_conversion.htm'\))
[IMPORT - Text Language Rule](javascript:call_link\('abenimport_text_language.htm'\))
[IMPORT - Internal Additions](javascript:call_link\('abapimport_internal.htm'\))
[Exceptions in IMPORT](javascript:call_link\('abenrabax_import_from_database.htm'\))