import {
	AntDesignOutlined,
	DownloadOutlined,
	InboxOutlined,
} from "@ant-design/icons";
import { Button, Flex, Space, Splitter, Typography } from "antd";
import type { UploadProps } from "antd";
import { Upload, message } from "antd";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { Layout } from "antd";
import type { ConfigProviderProps } from "antd";
import { createStyles } from "antd-style";
import { useState } from "react";

const { Title } = Typography;
type SizeType = ConfigProviderProps["componentSize"];
const { Header, Footer, Sider, Content } = Layout;
const { Dragger } = Upload;

const InvoiceParser: React.FC = () => {
	const [size, setSize] = useState<SizeType>("large");
	const useStyle = createStyles(({ css, token }) => {
		const { antCls } = token;
		return {
			customTable: css`
				${antCls}-table {
					${antCls}-table-container {
						${antCls}-table-body,
						${antCls}-table-content {
							scrollbar-width: thin;
							scrollbar-color: #eaeaea transparent;
							scrollbar-gutter: stable;
						}
					}
				}
			`,
		};
	});

	interface DataType {
		key: React.Key;
		name: string;
		age: number;
		address: string;
	}

	const columns: TableColumnsType<DataType> = [
		{
			title: "Full Name",
			width: 100,
			dataIndex: "name",
			key: "name",
			fixed: "left",
		},
		{
			title: "Age",
			width: 100,
			dataIndex: "age",
			key: "age",
			fixed: "left",
		},
		{
			title: "Column 1",
			dataIndex: "address",
			key: "1",
			width: 150,
		},
		{
			title: "Column 2",
			dataIndex: "address",
			key: "2",
			width: 150,
		},
		{
			title: "Column 3",
			dataIndex: "address",
			key: "3",
			width: 150,
		},
		{
			title: "Column 4",
			dataIndex: "address",
			key: "4",
			width: 150,
		},
		{
			title: "Column 5",
			dataIndex: "address",
			key: "5",
			width: 150,
		},
		{
			title: "Column 6",
			dataIndex: "address",
			key: "6",
			width: 150,
		},
		{
			title: "Column 7",
			dataIndex: "address",
			key: "7",
			width: 150,
		},
		{ title: "Column 8", dataIndex: "address", key: "8" },
		{ title: "Column 9", dataIndex: "address", key: "9" },
		{ title: "Column 10", dataIndex: "address", key: "10" },
		{ title: "Column 11", dataIndex: "address", key: "11" },
		{ title: "Column 12", dataIndex: "address", key: "12" },
		{ title: "Column 13", dataIndex: "address", key: "13" },
		{ title: "Column 14", dataIndex: "address", key: "14" },
		{ title: "Column 15", dataIndex: "address", key: "15" },
		{ title: "Column 16", dataIndex: "address", key: "16" },
		{ title: "Column 17", dataIndex: "address", key: "17" },
		{ title: "Column 18", dataIndex: "address", key: "18" },
		{ title: "Column 19", dataIndex: "address", key: "19" },
		{ title: "Column 20", dataIndex: "address", key: "20" },
		{
			title: "Action",
			key: "operation",
			fixed: "right",
			width: 100,
			render: () => <a>action</a>,
		},
	];

	const dataSource = Array.from({ length: 100 }).map<DataType>((_, i) => ({
		key: i,
		name: `Edward King ${i}`,
		age: 32,
		address: `London, Park Lane no. ${i}`,
	}));

	const props: UploadProps = {
		name: "file",
		multiple: true,
		action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
		onChange(info) {
			const { status } = info.file;
			if (status !== "uploading") {
				console.log(info.file, info.fileList);
			}
			if (status === "done") {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log("Dropped files", e.dataTransfer.files);
		},
	};

	const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
		<Flex justify="center" align="center" style={{ height: "100%" }}>
			<Typography.Title
				type="secondary"
				level={5}
				style={{ whiteSpace: "nowrap" }}
			>
				{props.text}
			</Typography.Title>
		</Flex>
	);

	const { styles } = useStyle();

	return (
		<Splitter
			style={{ height: "100%", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
		>
			<Splitter.Panel defaultSize="30%" min="20%" max="70%">
				<Splitter layout="vertical">
					<Splitter.Panel>
						<Dragger {...props}>
							<p className="ant-upload-drag-icon">
								<InboxOutlined />
							</p>
							<p className="ant-upload-text">
								Click or drag file to this area to upload
							</p>
							<p className="ant-upload-hint">
								Support for a single or bulk upload. Strictly prohibited from
								uploading company data or other banned files.
							</p>
						</Dragger>
					</Splitter.Panel>
					<Splitter.Panel>
						<Desc text="Bottom" />
					</Splitter.Panel>
				</Splitter>
			</Splitter.Panel>
			<Splitter.Panel style={{ overflow: "hidden", padding: "15px" }}>
				<Title>Preview</Title>
				<Table<DataType>
					className={styles.customTable}
					columns={columns}
					dataSource={dataSource}
					scroll={{ x: "max-content", y: 550 }}
				/>
				<Flex justify="center" align="center">
					<Button
						type="primary"
						icon={<DownloadOutlined />}
						size={size}
						style={{ margin: "0 25px 0 0" }}
					>
						Download
					</Button>
					<Button type="default" size={size}>
						Re-run
					</Button>
				</Flex>
			</Splitter.Panel>
		</Splitter>
	);
};

export default InvoiceParser;
