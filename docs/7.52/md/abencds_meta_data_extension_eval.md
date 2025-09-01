  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_usage.htm) →  [ABAP CDS Metadata Extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extensions.htm) → 

ABAP CDS - Evaluation of Metadata Extensions

Annotations from metadata extensions are evaluated first in the [evaluation of annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_analysis.htm) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE. If there are different metadata extensions for the same CDS entity, priority is determined by the following criteria:

-   CDS variant

-   A metadata extension can be assigned a [CDS variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_variant_glosry.htm "Glossary Entry") in its definition with [ANNOTATE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm) with the addition VARIANT.

-   The name of a CDS variant can be transferred to the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE to select the metadata extension.

-   Layer of metadata extension

The layer of a metadata extension is defined in its definition with [ANNOTATE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm) by the annotation [@Metadata.layer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm). These are the enumeration symbols for layers, in descending order of priority:

-   #CUSTOMER

-   #PARTNER

-   #INDUSTRY

-   #LOCALIZATION

-   #CORE

The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE collect the annotations they have returned, depending on the variant and the layers, according to the following hierarchy:

1.  If a CDS variant is specified, the metadata extensions that are assigned to the specified variant are evaluated first. All annotations are taken from these metadata extensions, according to the layers defined by the annotation @Metadata.layer. Annotations found in a higher layer are no longer searched for in a lower layer, so any annotation that exists there is overridden.
    
2.  Then, or if no CDS variant is specified, the same procedure is applied to the metadata extensions defined for the CDS entity that are not joined to any CDS variant. That is, all annotations not yet found are collected from the higher to the lower layers.
    
3.  Finally, the annotations of the CDS entity itself that are not found in a metadata extension are added as well. These can be annotations from the source code and inherited annotations. For annotations inherited from other CDS entities, any metadata extensions are evaluated first, according to the hierarchy described above.

If an existing CDS variant is specified for the evaluation, but there are no metadata extensions that are joined to the variant, processing continues with step 2, in the same way as when no variant is specified. If a non-existent CDS variant is specified, the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE return empty internal tables.

If there are several metadata extensions in a layer for the same variant or for no variant, the annotations of the first metadata extension to be found are used. The metadata extensions are respected here in an undefined (but stable) order.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Executable Example

[CDS Metadata Extensions with CDS Variants](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotate_view_abexa.htm)