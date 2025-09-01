---
title: "ABAP CDS - Evaluation of Metadata Extensions"
description: |
  When evaluating annotations(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_analysis.htm) with the class CL_DD_DDL_ANNOTATION_SERVICE, the annotations from metadata extensions are considered first. If there are different metadata extensions for the same CDS entit
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_meta_data_extension_eval.htm"
abapFile: "abencds_meta_data_extension_eval.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abencds", "meta", "extension", "eval"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_usage.htm) →  [ABAP CDS - Metadata Extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_meta_data_extensions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Evaluation%20of%20Metadata%20Extensions%2C%20ABENCDS_META_DATA_EXTENSION_EVAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

ABAP CDS - Evaluation of Metadata Extensions

When [evaluating annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_analysis.htm) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the annotations from metadata extensions are considered first. If there are different metadata extensions for the same CDS entity, priority is determined by the following criteria:

-   Layer of metadata extension
    
    The layer of a metadata extension is defined in its definition with [ANNOTATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_annotate_view.htm) by the annotation [@Metadata.layer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_metadata_ext_annos.htm). These are the enumeration symbols for layers, in descending order of priority:
    
    -   #CUSTOMER
    -   #PARTNER
    -   #INDUSTRY
    -   #LOCALIZATION
    -   #CORE

The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE collect the annotations they have returned, depending on the variant and the layers, according to the following hierarchy:

1.  The annotations are evaluated according to the layer defined by the annotation @Metadata.layer. Annotations found in a higher layer are no longer searched for in a lower layer, so any annotation that exists there is overridden.
2.  Then, the annotations of the CDS entity itself that are not found in a metadata extension are added as well. These can be annotations from the source code and inherited annotations. For annotations inherited from other CDS entities, any metadata extensions are evaluated first, according to the hierarchy described above.

If there are several metadata extensions in a layer, the annotations of the first metadata extension to be found are used. The metadata extensions are evaluated according to an undefined but stable order.

Executable Example

[CDS Metadata Extensions with CDS Variants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotate_view_abexa.htm)