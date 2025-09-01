  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-6.htm) →  [News for ABAP Release 6.40](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-640.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Clusters%20in%20ABAP%20Release%206.40%2C%20ABENNEWS-640-DATACLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Clusters in ABAP Release 6.40

[1\. New System Class CL\_ABAP\_EXPIMP\_CONV](#!ABAP_MODIFICATION_1@1@)
[2\. Conversion Additions in IMPORT](#!ABAP_MODIFICATION_2@2@)
[3\. Stricter Structure Check in IMPORT](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New System Class CL\_ABAP\_EXPIMP\_CONV

The methods of the class CL\_ABAP\_EXPIMP\_CONV convert the release-dependent internal format of [data clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry").

Hint

This change was also transported back to ABAP release 6.20.

Modification 2   

Conversion Additions in IMPORT

The [conversion additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_conversion.htm) ACCEPTING PADDING, ACCEPTING TRUNCATION, and IGNORING STRUCTURE BOUNDARIES are now also possible in [IMPORT FROM SHARED BUFFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm).

Modification 3   

Stricter Structure Check in IMPORT

The rule that structures and substructures (in the addition ACCEPTING PADDING) in a target structure in the statement [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_parameterlist.htm) can have more components than the source structure can lead to problems in references to the structures defined in ABAP Dictionary, if the structure is indicated there as extensible. From ABAP release 6.40, this situation can therefore produce a warning from the extended program check.