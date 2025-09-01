  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster.htm) → 

IMPORT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_shortref.htm)

Syntax

IMPORT [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_parameterlist.htm) FROM [medium](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_medium.htm) *\[*[conversion\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_conversion.htm)*\]*.

Effect

Imports data objects specified in [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_parameterlist.htm) from a [data cluster](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_glosry.htm "Glossary Entry") stored in storage medium [medium](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_medium.htm) with statement [EXPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm). If necessary, the data is automatically converted to the current byte order (endian) and character format. Use additions [conversion\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_conversion.htm) to make adaptations to the current platform. System Fields

System Fields

sy-subrc

Meaning

0

The specified data cluster was found and the content of the parameters in the data cluster was passed to the respective data objects. Unavailable parameters are ignored.

4

The specified data cluster was not found.

If the internal addition [USING subr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_internal.htm) is used, a different rule applies to sy-subrc.

Note

See also [Classes for Data Clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_expimp.htm).

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
[IMPORT - parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_parameterlist.htm)
[IMPORT - medium](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_medium.htm)
[IMPORT - conversion\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_conversion.htm)
[IMPORT - Text Language Rule](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenimport_text_language.htm)
[IMPORT - Internal Additions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_internal.htm)
[Exceptions in IMPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrabax_import_from_database.htm)