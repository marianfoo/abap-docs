  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%2C%20ABAPIMPORT_DATA_CLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT

[Short Reference](javascript:call_link\('abapimport_shortref.htm'\))

Syntax

IMPORT [parameter\_list](javascript:call_link\('abapimport_parameterlist.htm'\)) FROM [medium](javascript:call_link\('abapimport_medium.htm'\)) *\[*[conversion\_options](javascript:call_link\('abapimport_conversion.htm'\))*\]*.

Effect

Imports data objects specified in [parameter\_list](javascript:call_link\('abapimport_parameterlist.htm'\)) from a [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") stored in storage medium [medium](javascript:call_link\('abapimport_medium.htm'\)) with statement [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)). If necessary, the data is automatically converted to the current byte order (endian) and character format. The additions [conversion\_options](javascript:call_link\('abapimport_conversion.htm'\)) can be used to make adaptations to the current platform.

System Fields

sy-subrc

Meaning

0

The specified data cluster was found and the content of the parameters in the data cluster was passed to the respective data objects. Nonexistent parameters were ignored.

4

The specified data cluster was not found.

If the internal addition [USING subr](javascript:call_link\('abapimport_internal.htm'\)) is used, a different rule applies to sy-subrc.

Hint

See also [Classes for Data Clusters](javascript:call_link\('abencl_abap_expimp.htm'\)).

Example

Reading of a link table of the ABAP keyword documentation that is buffered in a data cluster of a database table into an internal table.

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
[IMPORT, parameter\_list](javascript:call_link\('abapimport_parameterlist.htm'\))
[IMPORT, medium](javascript:call_link\('abapimport_medium.htm'\))
[IMPORT, conversion\_options](javascript:call_link\('abapimport_conversion.htm'\))
[IMPORT, Text Language Rule](javascript:call_link\('abenimport_text_language.htm'\))
[IMPORT, Internal Additions](javascript:call_link\('abapimport_internal.htm'\))
[Exceptions in IMPORT](javascript:call_link\('abenrabax_import_from_database.htm'\))