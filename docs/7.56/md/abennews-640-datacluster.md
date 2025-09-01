  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-6.htm) →  [News for Release 6.40](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-640.htm) → 

Data Clusters in Release 6.40

[1\. New System Class CL\_ABAP\_EXPIMP\_CONV](#!ABAP_MODIFICATION_1@1@)
[2\. Conversion Additions in IMPORT](#!ABAP_MODIFICATION_2@2@)
[3\. Stricter Structure Check in IMPORT](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New System Class CL\_ABAP\_EXPIMP\_CONV

The methods of the class CL\_ABAP\_EXPIMP\_CONV convert the release-dependent internal format of [data clusters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_cluster_glosry.htm "Glossary Entry").

Hint

This change was also transported back to Release 6.20.

Modification 2   

Conversion Additions in IMPORT

The [conversion additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_conversion.htm) ACCEPTING PADDING, ACCEPTING TRUNCATION, and IGNORING STRUCTURE BOUNDARIES are now also possible in [IMPORT FROM SHARED BUFFER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_medium.htm).

Modification 3   

Stricter Structure Check in IMPORT

The rule that structures and substructures (in the addition ACCEPTING PADDING) in a target structure in the statement [IMPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_parameterlist.htm) can have more components than the source structure can lead to problems in references to the structures defined in ABAP Dictionary, if the structure is indicated there as extensible. From Release 6.40, this situation can therefore produce a warning from the extended program check.